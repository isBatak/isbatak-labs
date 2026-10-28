import { presetControls as controls } from "virtual:panda-studio/project"

import { generateCss } from "./css"
import type { ColorMode, StudioDoc } from "./doc"

type Dict = Record<string, any>

export interface PresetOption {
  path: string
  condition?: ColorMode
  min: number
  max: number
  step: number
}

export interface PresetControls {
  package: string
  layerStyles: string[]
  options: PresetOption[]
  defaults: Dict
  theme: (options: Dict) => { tokens?: Dict; semanticTokens?: Dict }
  sourceOptions: Record<string, number>
}

export const presetControls = controls as PresetControls[]

export const controlsForLayerStyle = (name: string) => presetControls.find((entry) => entry.layerStyles.includes(name))

const readPath = (node: Dict | undefined, path: string) =>
  path.split(".").reduce<any>((value, key) => (value == null ? undefined : value[key]), node)

export function presetValue(doc: StudioDoc, entry: PresetControls, path: string): number {
  return doc.presets?.[entry.package]?.[path] ?? entry.sourceOptions[path] ?? readPath(entry.defaults, path)
}

function presetOptions(doc: StudioDoc, entry: PresetControls) {
  const options: Dict = {}
  for (const { path } of entry.options) {
    const segments = path.split(".")
    let node = options
    for (const segment of segments.slice(0, -1)) node = node[segment] ??= {}
    node[segments.at(-1)!] = presetValue(doc, entry, path)
  }
  return options
}

function flatten(node: Dict, path: string[], visit: (path: string[], value: unknown) => void) {
  for (const [key, child] of Object.entries(node)) {
    if (!child || typeof child !== "object") continue
    if ("value" in child) visit([...path, key], child.value)
    else flatten(child, [...path, key], visit)
  }
}

export function presetTokens(doc: StudioDoc, entry: PresetControls) {
  const theme = entry.theme(presetOptions(doc, entry))
  const tokens: Record<string, string> = {}
  const semanticTokens: Record<string, Partial<Record<ColorMode, string>>> = {}
  flatten(theme.tokens ?? {}, [], (path, value) => {
    if (typeof value === "string") tokens[path.join(".")] = value
  })
  flatten(theme.semanticTokens ?? {}, [], (path, value) => {
    const modes = typeof value === "string" ? { base: value } : (value as Dict)
    semanticTokens[path.join(".")] = { base: modes.base, _dark: modes._dark }
  })
  return { tokens, semanticTokens }
}

export function withPresetTokens(doc: StudioDoc): StudioDoc {
  let tokens = doc.tokens
  let semanticTokens = doc.semanticTokens
  for (const entry of presetControls) {
    if (!doc.presets?.[entry.package]) continue
    const produced = presetTokens(doc, entry)
    tokens = { ...produced.tokens, ...tokens }
    semanticTokens = { ...produced.semanticTokens, ...semanticTokens }
  }
  return { ...doc, tokens, semanticTokens }
}

export const studioCss = (doc: StudioDoc) => generateCss(withPresetTokens(doc))
