import { useEffect, useMemo, useRef, useState } from "react"
import { styled } from "styled-system/jsx"

import { components } from "../components"
import { type RenderMessage, isCanvasMessage } from "../lib/messages"
import { recipeStates } from "../lib/states"
import { recipes } from "../lib/theme-meta"
import type { Studio } from "./use-studio"

/**
 * The canvas runs in an iframe so overridden tokens and recipes never leak into the studio chrome, and portals
 * (menus, dialogs, tooltips) render inside the preview.
 */
export function CanvasFrame(props: { studio: Studio }) {
  const { state, dispatch, css } = props.studio
  const frame = useRef<HTMLIFrameElement>(null)
  // Bumped on every `ready` so a reloaded canvas (HMR) gets the current state again
  const [ready, setReady] = useState(0)

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin || event.source !== frame.current?.contentWindow) return
      const message = event.data
      if (!isCanvasMessage(message)) return
      switch (message.type) {
        case "ready":
          setReady((count) => count + 1)
          break
        case "select-part":
          dispatch({ type: "select-part", part: message.part })
          break
        case "select-cell":
          dispatch({ type: "select-cell", cell: message.cell, part: message.part })
          break
        case "select-scope":
          dispatch({ type: "scope", scope: message.scope })
          break
        case "select-state":
          dispatch({ type: "condition", condition: message.condition })
          break
        case "select-token":
          dispatch({ type: "select-token", token: message.token })
          break
        case "lint":
          dispatch({ type: "lint", results: message.results })
          break
        case "layers":
          dispatch({ type: "layers", layers: message.layers })
          break
      }
    }
    window.addEventListener("message", onMessage)
    return () => window.removeEventListener("message", onMessage)
  }, [dispatch])

  const recipe = state.page.kind === "component" ? recipes[components[state.page.id].recipe] : undefined
  const states = useMemo(
    () => (recipe ? recipeStates(recipe, state.doc, state.addedStates[recipe.key]) : [""]),
    [recipe, state.doc, state.addedStates],
  )

  useEffect(() => {
    if (!ready) return
    const message: RenderMessage = {
      type: "render",
      page: state.page,
      css,
      doc: state.doc,
      colorMode: state.colorMode,
      themeVariant: state.themeVariant,
      selectedPart: state.selectedPart,
      hoveredPart: state.hoveredPart,
      selectedToken: state.selectedToken,
      scope: state.scope,
      condition: state.condition,
      selectedCell: state.selectedCell,
      states,
    }
    frame.current?.contentWindow?.postMessage(message, window.location.origin)
  }, [
    ready,
    state.page,
    css,
    state.doc,
    state.colorMode,
    state.themeVariant,
    state.selectedPart,
    state.hoveredPart,
    state.selectedToken,
    state.scope,
    state.condition,
    state.selectedCell,
    states,
  ])

  return (
    <styled.iframe
      ref={frame}
      src={`${import.meta.env.BASE_URL}canvas/canvas.html`}
      title="Canvas"
      w="full"
      h="full"
      border="0"
      display="block"
      bg="bg.subtle"
    />
  )
}
