import { useEffect } from "react"
import { styled } from "styled-system/jsx"

import { components } from "../components"
import { listRules } from "../lib/doc"
import { countRecipeRules, recipes } from "../lib/theme-meta"
import { CanvasFrame } from "./canvas-frame"
import { TokenDatalists } from "./fields"
import { Inspector } from "./inspector"
import { Sidebar } from "./sidebar"
import { TopBar } from "./top-bar"
import { Muted, Toggle, ToggleItem } from "./ui"
import { type Studio as StudioApi, useStudio } from "./use-studio"

export function Studio() {
  const studio = useStudio()
  const { dispatch } = studio

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
      gridTemplateColumns="15rem 1fr 20rem"
      gridTemplateRows="auto 1fr"
      bg="bg"
      color="fg"
      overflow="hidden"
      textStyle="sm"
    >
      <TopBar studio={studio} />
      <Sidebar studio={studio} />
      <styled.main display="flex" flexDirection="column" minW="0" minH="0">
        <CanvasHeader studio={studio} />
        <styled.div flex="1" minH="0">
          <CanvasFrame studio={studio} />
        </styled.div>
      </styled.main>
      <Inspector studio={studio} />
      <TokenDatalists />
    </styled.div>
  )
}

function CanvasHeader(props: { studio: StudioApi }) {
  const { state, dispatch } = props.studio
  const { page } = state

  let title = "All components"
  let subtitle = `${Object.keys(components).length} components`
  if (page.kind === "foundation") {
    title = page.id.charAt(0).toUpperCase() + page.id.slice(1)
    subtitle = state.colorMode === "_dark" ? "Editing the dark palette" : "Editing the light palette"
  }
  if (page.kind === "component") {
    const component = components[page.id]
    const recipe = recipes[component.recipe]!
    title = component.label
    subtitle = `${countRecipeRules(recipe)} rules, ${listRules(state.doc, { recipe: recipe.key }).length} yours`
  }

  return (
    <styled.div
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      h="12"
      px="4"
      borderBottomWidth="1px"
      borderColor="border.muted"
    >
      <styled.div display="flex" alignItems="baseline" gap="2">
        <styled.span textStyle="sm" fontWeight="semibold">
          {title}
        </styled.span>
        <Muted>{subtitle}</Muted>
      </styled.div>
      {page.kind === "component" && (
        <Toggle aria-label="View" value={state.view} onChange={(view) => dispatch({ type: "view", view })}>
          <ToggleItem value="demo">Demo</ToggleItem>
          <ToggleItem value="matrix">Matrix</ToggleItem>
        </Toggle>
      )}
    </styled.div>
  )
}
