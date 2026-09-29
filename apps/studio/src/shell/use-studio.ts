import { useCallback, useEffect, useMemo, useReducer } from "react"

import { components } from "../components"
import { generateCss } from "../lib/css"
import { type ColorMode, type StudioDoc, emptyDoc, isStudioDoc } from "../lib/doc"
import { toPresetSource } from "../lib/export"
import type { ComponentId, FoundationId, LintResult, Page, Part, View } from "../lib/messages"
import { recipes } from "../lib/theme-meta"

const STORAGE_KEY = "panda-studio:themes"
const CURRENT_KEY = "panda-studio:current"
const DEFAULT_THEME = "default"
const HISTORY_LIMIT = 200

export interface StudioState {
  doc: StudioDoc
  past: StudioDoc[]
  future: StudioDoc[]
  /** Edits with the same key within a short window collapse into one undo step (typing, dragging) */
  lastEdit: { key: string; at: number } | undefined
  themeName: string
  themes: Record<string, StudioDoc>
  page: Page
  view: View
  colorMode: ColorMode
  selectedPart: Part | undefined
  scope: string
  condition: string
  selectedToken: string | undefined
  lint: LintResult[]
}

type Action =
  | { type: "edit"; update: (doc: StudioDoc) => StudioDoc; key?: string | undefined }
  | { type: "undo" }
  | { type: "redo" }
  | { type: "navigate"; page: Page }
  | { type: "view"; view: View }
  | { type: "color-mode"; colorMode: ColorMode }
  | { type: "select-part"; part: Part | undefined }
  | { type: "scope"; scope: string }
  | { type: "condition"; condition: string }
  | { type: "select-token"; token: string | undefined }
  | { type: "switch-theme"; name: string; doc?: StudioDoc | undefined }
  | { type: "merge-themes"; themes: Record<string, StudioDoc> }
  | { type: "delete-theme"; name: string }
  | { type: "lint"; results: LintResult[] }

/* -------------------------------------------------------------------------------------------------
 * Persistence
 * -----------------------------------------------------------------------------------------------*/

function readStorage<T>(key: string): T | undefined {
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : undefined
  } catch {
    return undefined
  }
}

function writeStorage(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {}
}

export function encodeShare(doc: StudioDoc) {
  return btoa(unescape(encodeURIComponent(JSON.stringify(doc))))
}

function decodeShare(value: string) {
  try {
    const doc = JSON.parse(decodeURIComponent(escape(atob(value))))
    return isStudioDoc(doc) ? doc : undefined
  } catch {
    return undefined
  }
}

/** Sandboxed hosts (e.g. an embedded preview) can refuse history updates; routing is a convenience there */
function replaceUrl(url: string | URL) {
  try {
    window.history.replaceState(null, "", url)
  } catch {}
}

/* -------------------------------------------------------------------------------------------------
 * Routing (`#/color`, `#/components`, `#/components/accordion?view=matrix`)
 * -----------------------------------------------------------------------------------------------*/

const foundationIds: FoundationId[] = ["overview", "color", "typography", "radius", "shadow", "spacing"]

function pageFromHash(hash: string): { page: Page; view: View } {
  const [path = "", query = ""] = hash.replace(/^#\/?/, "").split("?")
  const view: View = new URLSearchParams(query).get("view") === "matrix" ? "matrix" : "demo"
  const [first, second] = path.split("/")
  if (first === "components" && second && second in components) {
    return { page: { kind: "component", id: second as ComponentId }, view }
  }
  if (first === "components") return { page: { kind: "components" }, view }
  if (foundationIds.includes(first as FoundationId))
    return { page: { kind: "foundation", id: first as FoundationId }, view }
  return { page: { kind: "foundation", id: "overview" }, view }
}

function hashFromPage(page: Page, view: View) {
  if (page.kind === "foundation") return `#/${page.id}`
  if (page.kind === "components") return "#/components"
  return `#/components/${page.id}${view === "matrix" ? "?view=matrix" : ""}`
}

/* -------------------------------------------------------------------------------------------------
 * Reducer
 * -----------------------------------------------------------------------------------------------*/

function init(): StudioState {
  const themes = readStorage<Record<string, StudioDoc>>(STORAGE_KEY) ?? {}
  let themeName = readStorage<string>(CURRENT_KEY) ?? DEFAULT_THEME

  const shared = new URLSearchParams(window.location.search).get("theme")
  const sharedDoc = shared ? decodeShare(shared) : undefined
  if (sharedDoc) {
    themeName = "shared"
    themes[themeName] = sharedDoc
    const url = new URL(window.location.href)
    url.searchParams.delete("theme")
    replaceUrl(url)
  }

  const { page, view } = pageFromHash(window.location.hash)

  return {
    doc: themes[themeName] ?? emptyDoc(),
    past: [],
    future: [],
    lastEdit: undefined,
    themeName,
    themes: { [DEFAULT_THEME]: emptyDoc(), ...themes },
    page,
    view,
    colorMode: "base",
    selectedPart: page.kind === "component" ? withRootSlot({ recipe: components[page.id].recipe }) : undefined,
    scope: "base",
    condition: "",
    selectedToken: undefined,
    lint: [],
  }
}

const withDoc = (state: StudioState, doc: StudioDoc): StudioState => ({
  ...state,
  doc,
  themes: { ...state.themes, [state.themeName]: doc },
})

function reducer(state: StudioState, action: Action): StudioState {
  switch (action.type) {
    case "edit": {
      const doc = action.update(state.doc)
      if (JSON.stringify(doc) === JSON.stringify(state.doc)) return state
      const now = Date.now()
      const coalesce = action.key && state.lastEdit?.key === action.key && now - state.lastEdit.at < 1000
      return {
        ...withDoc(state, doc),
        past: coalesce ? state.past : [...state.past, state.doc].slice(-HISTORY_LIMIT),
        future: [],
        lastEdit: action.key ? { key: action.key, at: now } : undefined,
      }
    }
    case "undo": {
      const previous = state.past.at(-1)
      if (!previous) return state
      return {
        ...withDoc(state, previous),
        past: state.past.slice(0, -1),
        future: [state.doc, ...state.future],
        lastEdit: undefined,
      }
    }
    case "redo": {
      const [next, ...future] = state.future
      if (!next) return state
      return { ...withDoc(state, next), past: [...state.past, state.doc], future, lastEdit: undefined }
    }
    case "navigate": {
      const sameComponent =
        action.page.kind === "component" && state.page.kind === "component" && action.page.id === state.page.id
      const part =
        action.page.kind === "component" ? { recipe: components[action.page.id].recipe, slot: undefined } : undefined
      return {
        ...state,
        page: action.page,
        view: action.page.kind === "component" ? state.view : "demo",
        selectedPart: sameComponent ? state.selectedPart : part && withRootSlot(part),
        scope: sameComponent ? state.scope : "base",
        condition: sameComponent ? state.condition : "",
        selectedToken: undefined,
      }
    }
    case "view":
      return { ...state, view: action.view }
    case "color-mode":
      return { ...state, colorMode: action.colorMode }
    case "select-part":
      return {
        ...state,
        selectedPart: action.part,
        // Keep the scope when it applies to the new part's recipe
        scope: action.part?.recipe === state.selectedPart?.recipe ? state.scope : "base",
      }
    case "scope":
      return { ...state, scope: action.scope }
    case "condition":
      return { ...state, condition: action.condition }
    case "select-token":
      return { ...state, selectedToken: action.token }
    case "switch-theme": {
      const doc = action.doc ?? state.themes[action.name] ?? emptyDoc()
      return {
        ...state,
        themeName: action.name,
        themes: { ...state.themes, [action.name]: doc },
        doc,
        past: [],
        future: [],
        lastEdit: undefined,
      }
    }
    case "merge-themes": {
      const themes = { ...action.themes, ...state.themes }
      // Repository themes win over an untouched local copy
      for (const [name, doc] of Object.entries(action.themes)) {
        const local = state.themes[name]
        if (!local || JSON.stringify(local) === JSON.stringify(emptyDoc())) themes[name] = doc
      }
      return { ...state, themes, doc: themes[state.themeName] ?? state.doc }
    }
    case "delete-theme": {
      const themes = { ...state.themes }
      delete themes[action.name]
      if (!Object.keys(themes).length) themes[DEFAULT_THEME] = emptyDoc()
      const themeName = action.name === state.themeName ? Object.keys(themes)[0]! : state.themeName
      return { ...state, themes, themeName, doc: themes[themeName]!, past: [], future: [] }
    }
    case "lint":
      return { ...state, lint: action.results }
  }
}

/** Slot recipes start with their root slot selected, like DS Manager's component layers */
function withRootSlot(part: Part): Part {
  const slots = recipes[part.recipe]?.slots
  if (!slots) return part
  return { ...part, slot: ["root", "content", "trigger"].find((slot) => slots.includes(slot)) ?? slots[0] }
}

/* -------------------------------------------------------------------------------------------------
 * Hook
 * -----------------------------------------------------------------------------------------------*/

export function useStudio() {
  const [state, dispatch] = useReducer(reducer, undefined, init)

  useEffect(() => {
    writeStorage(STORAGE_KEY, state.themes)
    writeStorage(CURRENT_KEY, state.themeName)
  }, [state.themes, state.themeName])

  useEffect(() => {
    const hash = hashFromPage(state.page, state.view)
    if (window.location.hash !== hash) replaceUrl(hash)
  }, [state.page, state.view])

  useEffect(() => {
    const onHashChange = () => dispatch({ type: "navigate", page: pageFromHash(window.location.hash).page })
    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  // In dev, themes saved into the repository (`apps/studio/themes`) are loaded too
  useEffect(() => {
    if (!import.meta.env.DEV) return
    fetch("/__studio/themes/")
      .then((response) => (response.ok ? response.json() : {}))
      .then((themes: Record<string, unknown>) => {
        const valid = Object.fromEntries(Object.entries(themes).filter(([, doc]) => isStudioDoc(doc)))
        dispatch({ type: "merge-themes", themes: valid as Record<string, StudioDoc> })
      })
      .catch(() => {})
  }, [])

  const css = useMemo(() => generateCss(state.doc), [state.doc])

  const edit = useCallback(
    (update: (doc: StudioDoc) => StudioDoc, key?: string) => dispatch({ type: "edit", update, key }),
    [],
  )

  const saveToRepo = useCallback(async () => {
    const response = await fetch(`/__studio/themes/${encodeURIComponent(state.themeName)}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ doc: state.doc, preset: toPresetSource(state.doc, state.themeName) }),
    })
    if (!response.ok) throw new Error(await response.text())
  }, [state.doc, state.themeName])

  return { state, dispatch, css, edit, saveToRepo }
}

export type Studio = ReturnType<typeof useStudio>
