import { type ReactNode, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"
import { css } from "styled-system/css"
import { styled } from "styled-system/jsx"

import { components } from "../components"
import { demos } from "../demos"
import type { CanvasMessage, ComponentId, Part, RenderMessage } from "../lib/messages"
import { recipes } from "../lib/theme-meta"
import { ColorPage, RadiusPage, ShadowPage, SpacingPage, TypographyPage } from "./foundations"
import { collectLayers } from "./layers"
import { runLint } from "./lint"
import { OverviewBoard } from "./overview"
import { SelectionLayer } from "./selection"

const post = (message: CanvasMessage) => window.parent.postMessage(message, window.location.origin)

export function CanvasApp() {
  const [state, setState] = useState<RenderMessage>()

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return
      if ((event.data as RenderMessage)?.type === "render") setState(event.data as RenderMessage)
    }
    window.addEventListener("message", onMessage)
    post({ type: "ready" })
    return () => window.removeEventListener("message", onMessage)
  }, [])

  // Overrides are injected after Panda's stylesheet, into the same cascade layers
  useLayoutEffect(() => {
    if (!state) return
    let style = document.getElementById("studio-overrides")
    if (!style) {
      style = document.createElement("style")
      style.id = "studio-overrides"
      document.head.append(style)
    }
    style.textContent = state.css
    document.documentElement.classList.toggle("dark", state.colorMode === "_dark")
    document.documentElement.style.colorScheme = state.colorMode === "_dark" ? "dark" : "light"
  }, [state?.css, state?.colorMode])

  useEffect(() => {
    if (!state) return
    const id = window.setTimeout(() => post({ type: "lint", results: runLint() }), 50)
    return () => window.clearTimeout(id)
  }, [state?.css, state?.colorMode])

  // Report the rendered part tree for Component Layers, and again whenever the DOM changes (tabs, accordions, ...)
  const contentRef = useRef<HTMLDivElement>(null)
  const pageKey = state ? JSON.stringify(state.page) + state.view : ""
  useEffect(() => {
    const root = contentRef.current
    if (!root) return
    let last = ""
    let timer = 0
    const report = () => {
      const layers = collectLayers(root)
      const serialized = JSON.stringify(layers)
      if (serialized === last) return
      last = serialized
      post({ type: "layers", layers })
    }
    const observer = new MutationObserver(() => {
      window.clearTimeout(timer)
      timer = window.setTimeout(report, 150)
    })
    observer.observe(root, { subtree: true, childList: true, attributes: true, attributeFilter: ["class"] })
    report()
    return () => {
      observer.disconnect()
      window.clearTimeout(timer)
    }
  }, [pageKey])

  const onSelectPart = useCallback((part: Part) => post({ type: "select-part", part }), [])
  const onSelectToken = (token: string) => post({ type: "select-token", token })

  if (!state) return null

  const { page } = state
  const foundationProps = {
    doc: state.doc,
    colorMode: state.colorMode,
    selectedToken: state.selectedToken,
    onSelectToken,
  }

  let content: ReactNode = null
  if (page.kind === "foundation") {
    if (page.id === "overview") content = <OverviewBoard />
    if (page.id === "color") content = <ColorPage {...foundationProps} />
    if (page.id === "typography") content = <TypographyPage {...foundationProps} />
    if (page.id === "radius") content = <RadiusPage {...foundationProps} />
    if (page.id === "shadow") content = <ShadowPage {...foundationProps} />
    if (page.id === "spacing") content = <SpacingPage {...foundationProps} />
  } else if (page.kind === "components") {
    content = <ComponentGallery />
  } else if (state.view === "matrix") {
    content = <Matrix id={page.id} />
  } else {
    const { Demo } = demos[page.id]
    content = <Demo />
  }

  const board = page.kind === "foundation" && page.id === "overview"
  const wide = page.kind !== "component" || state.view === "matrix"

  return (
    <styled.main
      minH="100vh"
      bg="bg.subtle"
      color="fg"
      px={board ? "16" : "8"}
      py={board ? "16" : "12"}
      w={board ? "max-content" : undefined}
      minW="full"
    >
      <BoardPanning enabled={board} pageKey={pageKey} />
      <styled.div
        key={pageKey}
        ref={contentRef}
        mx="auto"
        maxW={board ? undefined : wide ? "6xl" : "3xl"}
        display="flex"
        flexDirection="column"
        gap="12"
      >
        {content}
      </styled.div>
      <SelectionLayer selected={state.selectedPart} highlighted={state.hoveredPart} onSelect={onSelectPart} />
    </styled.main>
  )
}

/**
 * On the Overview board: start centered, and pan by dragging with Space held or the middle mouse button.
 */
function BoardPanning(props: { enabled: boolean; pageKey: string }) {
  useEffect(() => {
    if (!props.enabled) return
    const root = document.scrollingElement ?? document.documentElement
    root.scrollLeft = (root.scrollWidth - root.clientWidth) / 2

    let space = false
    let drag: { x: number; y: number; left: number; top: number } | undefined
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.code !== "Space" || event.target instanceof HTMLInputElement) return
      space = true
      document.body.style.cursor = "grab"
      event.preventDefault()
    }
    const onKeyUp = (event: KeyboardEvent) => {
      if (event.code !== "Space") return
      space = false
      if (!drag) document.body.style.cursor = ""
    }
    const onPointerDown = (event: PointerEvent) => {
      if (!(space || event.button === 1)) return
      event.preventDefault()
      event.stopPropagation()
      drag = { x: event.clientX, y: event.clientY, left: root.scrollLeft, top: root.scrollTop }
      document.body.style.cursor = "grabbing"
    }
    const onPointerMove = (event: PointerEvent) => {
      if (!drag) return
      root.scrollLeft = drag.left - (event.clientX - drag.x)
      root.scrollTop = drag.top - (event.clientY - drag.y)
    }
    const onPointerUp = () => {
      drag = undefined
      document.body.style.cursor = space ? "grab" : ""
    }
    window.addEventListener("keydown", onKeyDown)
    window.addEventListener("keyup", onKeyUp)
    window.addEventListener("pointerdown", onPointerDown, true)
    window.addEventListener("pointermove", onPointerMove)
    window.addEventListener("pointerup", onPointerUp)
    return () => {
      window.removeEventListener("keydown", onKeyDown)
      window.removeEventListener("keyup", onKeyUp)
      window.removeEventListener("pointerdown", onPointerDown, true)
      window.removeEventListener("pointermove", onPointerMove)
      window.removeEventListener("pointerup", onPointerUp)
      document.body.style.cursor = ""
    }
  }, [props.enabled, props.pageKey])
  return null
}

/* -------------------------------------------------------------------------------------------------
 * Matrix: every combination of the recipe's two main variant axes
 * -----------------------------------------------------------------------------------------------*/

function matrixAxes(variantMap: Record<string, string[]>) {
  const keys = Object.keys(variantMap).filter((key) => variantMap[key]!.length > 1)
  const rows = keys.includes("variant") ? "variant" : keys[0]
  const columns = keys.includes("size") && rows !== "size" ? "size" : keys.find((key) => key !== rows)
  return { rows, columns }
}

const cell = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  p: "4",
  bg: "bg",
  borderRadius: "lg",
  borderWidth: "1px",
  borderColor: "border.muted",
  minW: "0",
  overflow: "hidden",
})

const axisLabel = css({ textStyle: "xs", color: "fg.muted", fontFamily: "mono" })

function Matrix(props: { id: ComponentId }) {
  const recipe = recipes[components[props.id].recipe]!
  const { Sample } = demos[props.id]
  const { rows, columns } = matrixAxes(recipe.variantMap)
  const rowValues = rows ? recipe.variantMap[rows]! : [undefined]
  const columnValues = columns ? recipe.variantMap[columns]! : [undefined]

  return (
    <styled.div overflowX="auto">
      <styled.div
        display="grid"
        gap="2"
        alignItems="stretch"
        style={{ gridTemplateColumns: `auto repeat(${columnValues.length}, minmax(10rem, 1fr))` }}
      >
        <span />
        {columnValues.map((column) => (
          <span key={String(column)} className={axisLabel}>
            {columns ? `${columns}=${column}` : "default"}
          </span>
        ))}
        {rowValues.map((row) => (
          <RowCells key={String(row)} label={rows ? `${rows}=${row}` : "default"}>
            {columnValues.map((column) => (
              <div key={String(column)} className={cell}>
                <Sample {...(rows ? { [rows]: row } : {})} {...(columns ? { [columns]: column } : {})} />
              </div>
            ))}
          </RowCells>
        ))}
      </styled.div>
    </styled.div>
  )
}

function RowCells(props: { label: string; children: ReactNode }) {
  return (
    <>
      <styled.span className={axisLabel} alignSelf="center" pe="2">
        {props.label}
      </styled.span>
      {props.children}
    </>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Gallery of every component
 * -----------------------------------------------------------------------------------------------*/

const tile = css({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  borderRadius: "xl",
  borderWidth: "1px",
  borderColor: "border.muted",
  bg: "bg",
  overflow: "hidden",
  textAlign: "start",
  transition: "box-shadow 0.15s",
  _hover: { shadow: "md" },
})

const tileLink = css({
  px: "4",
  py: "3",
  borderTopWidth: "1px",
  borderColor: "border.muted",
  textStyle: "sm",
  fontWeight: "medium",
  textAlign: "start",
  cursor: "pointer",
  outline: "0",
  _after: { content: '""', position: "absolute", inset: "0", borderRadius: "xl" },
  _focusVisible: { _after: { outline: "2px solid", outlineColor: "blue.500" } },
})

const tilePreview = css({
  h: "48",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  p: "6",
  overflow: "hidden",
  pointerEvents: "none",
  "& > *": { maxW: "full" },
})

function Tile(props: { id: ComponentId }) {
  const { Sample } = demos[props.id]
  return (
    <div className={tile}>
      <div className={tilePreview} inert>
        <Sample />
      </div>
      {/* Stretched over the whole tile, so the preview stays non-interactive markup */}
      <button
        type="button"
        className={tileLink}
        onClick={() => post({ type: "navigate", page: { kind: "component", id: props.id } })}
      >
        {components[props.id].label}
      </button>
    </div>
  )
}

function ComponentGallery() {
  return (
    <styled.div display="grid" gridTemplateColumns="repeat(auto-fill, minmax(16rem, 1fr))" gap="4">
      <Tile id="accordion" />
      <Tile id="alert" />
      <Tile id="avatar" />
      <Tile id="badge" />
      <Tile id="button" />
      <Tile id="card" />
      <Tile id="checkbox" />
      <Tile id="drawer" />
      <Tile id="hoverCard" />
      <Tile id="input" />
      <Tile id="kbd" />
      <Tile id="menu" />
      <Tile id="popover" />
      <Tile id="radioCard" />
      <Tile id="segmentGroup" />
      <Tile id="select" />
      <Tile id="slider" />
      <Tile id="spinner" />
      <Tile id="switch" />
      <Tile id="tabs" />
      <Tile id="tooltip" />
    </styled.div>
  )
}
