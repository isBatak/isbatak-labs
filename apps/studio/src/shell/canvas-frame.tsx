import { useEffect, useRef, useState } from "react"
import { styled } from "styled-system/jsx"

import { type RenderMessage, isCanvasMessage } from "../lib/messages"
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
        case "select-token":
          dispatch({ type: "select-token", token: message.token })
          break
        case "navigate":
          dispatch({ type: "navigate", page: message.page })
          break
        case "lint":
          dispatch({ type: "lint", results: message.results })
          break
      }
    }
    window.addEventListener("message", onMessage)
    return () => window.removeEventListener("message", onMessage)
  }, [dispatch])

  useEffect(() => {
    if (!ready) return
    const message: RenderMessage = {
      type: "render",
      page: state.page,
      view: state.view,
      css,
      doc: state.doc,
      colorMode: state.colorMode,
      selectedPart: state.selectedPart,
      selectedToken: state.selectedToken,
    }
    frame.current?.contentWindow?.postMessage(message, window.location.origin)
  }, [ready, state.page, state.view, css, state.doc, state.colorMode, state.selectedPart, state.selectedToken])

  return (
    <styled.iframe
      ref={frame}
      src={`${import.meta.env.BASE_URL}canvas.html`}
      title="Canvas"
      w="full"
      h="full"
      border="0"
      display="block"
      bg="bg.subtle"
    />
  )
}
