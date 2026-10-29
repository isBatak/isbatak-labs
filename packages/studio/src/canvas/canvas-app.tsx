import { type ReactNode, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"
import { styled } from "styled-system/jsx"

import type { CanvasMessage, Part, RenderMessage } from "../lib/messages"
import { ColorPage, RadiusPage, ShadowPage, SpacingPage, TypographyPage } from "./foundations"
import { collectLayers } from "./layers"
import { Matrix } from "./matrix"
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
    if (state.themeVariant) document.documentElement.dataset.pandaTheme = state.themeVariant
    else delete document.documentElement.dataset.pandaTheme
  }, [state?.css, state?.colorMode, state?.themeVariant])

  useEffect(() => {
    if (!state) return
    const id = window.setTimeout(() => post({ type: "lint", results: runLint() }), 50)
    return () => window.clearTimeout(id)
  }, [state?.css, state?.colorMode, state?.themeVariant])

  // Report the rendered part tree for Component Layers, and again whenever the DOM changes (tabs, accordions, ...)
  const contentRef = useRef<HTMLDivElement>(null)
  const pageKey = state ? JSON.stringify(state.page) : ""
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
  } else {
    content = (
      <Matrix
        id={page.id}
        states={state.states}
        scope={state.scope}
        condition={state.condition}
        selectedCell={state.selectedCell}
        post={post}
      />
    )
  }

  const board = page.kind === "foundation" && page.id === "overview"

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
        maxW={board ? undefined : "6xl"}
        display="flex"
        flexDirection="column"
        gap="12"
      >
        {content}
      </styled.div>
      <SelectionLayer
        selected={page.kind === "component" ? undefined : state.selectedPart}
        highlighted={state.hoveredPart}
        onSelect={onSelectPart}
      />
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
