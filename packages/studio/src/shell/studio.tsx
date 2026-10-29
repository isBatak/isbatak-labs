import { useEffect } from "react"
import { styled } from "styled-system/jsx"

import { CanvasFrame } from "./canvas-frame"
import { TokenDatalists } from "./fields"
import { Inspector } from "./inspector"
import { Sidebar } from "./sidebar"
import { TopBar } from "./top-bar"
import { useStoredSize } from "./ui"
import { useStudio } from "./use-studio"

export function Studio() {
  const studio = useStudio()
  const { dispatch } = studio
  const [sidebarWidth, setSidebarWidth] = useStoredSize("sidebar-width", 256, 200, 520)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!(event.metaKey || event.ctrlKey) || event.key.toLowerCase() !== "z") return
      if (event.target instanceof HTMLInputElement && event.target.type !== "color") return
      event.preventDefault()
      dispatch({ type: event.shiftKey ? "redo" : "undo" })
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [dispatch])

  return (
    <styled.div
      h="100vh"
      display="grid"
      style={{ gridTemplateColumns: `${sidebarWidth}px minmax(0, 1fr) 20rem` }}
      gridTemplateRows="auto 1fr"
      bg="bg"
      color="fg"
      overflow="hidden"
      textStyle="sm"
    >
      <TopBar studio={studio} />
      <Sidebar studio={studio} width={sidebarWidth} onResize={setSidebarWidth} />
      <styled.main minW="0" minH="0">
        <CanvasFrame studio={studio} />
      </styled.main>
      <Inspector studio={studio} />
      <TokenDatalists />
    </styled.div>
  )
}
