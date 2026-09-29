import { type ReactNode, useCallback, useEffect, useLayoutEffect, useState } from "react"
import { css } from "styled-system/css"
import { styled } from "styled-system/jsx"

import { components } from "../components"
import { demos } from "../demos"
import type { CanvasMessage, ComponentId, Part, RenderMessage } from "../lib/messages"
import { recipes } from "../lib/theme-meta"
import { ColorPage, OverviewPage, RadiusPage, ShadowPage, SpacingPage, TypographyPage } from "./foundations"
import { runLint } from "./lint"
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
    if (page.id === "overview") content = <OverviewPage {...foundationProps} />
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

  const wide = page.kind !== "component" || state.view === "matrix"

  return (
    <styled.main minH="100vh" bg="bg.subtle" color="fg" px="8" py="12">
      <styled.div
        key={JSON.stringify(page) + state.view}
        mx="auto"
        maxW={wide ? "6xl" : "3xl"}
        display="flex"
        flexDirection="column"
        gap="12"
      >
        {content}
      </styled.div>
      <SelectionLayer selected={state.selectedPart} onSelect={onSelectPart} />
    </styled.main>
  )
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
