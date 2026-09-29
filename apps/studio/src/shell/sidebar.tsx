import { type ReactNode, createContext, use, useState } from "react"
import { css, cx } from "styled-system/css"
import { styled } from "styled-system/jsx"

import { components } from "../components"
import { listRules } from "../lib/doc"
import type { ComponentId, FoundationId, Page } from "../lib/messages"
import { recipes } from "../lib/theme-meta"
import { ComponentIcon, Icon, LayersIcon, SearchIcon, dot } from "./ui"
import type { Studio } from "./use-studio"

const navItem = css({
  display: "flex",
  alignItems: "center",
  gap: "2",
  w: "full",
  h: "7",
  px: "2",
  textStyle: "xs",
  color: "fg",
  borderRadius: "md",
  cursor: "pointer",
  textAlign: "start",
  _hover: { bg: "bg.muted" },
  _selected: { bg: "bg.emphasized", fontWeight: "medium" },
  "& svg": { w: "3.5", h: "3.5", color: "fg.muted", flexShrink: "0" },
})

const heading = css({ textStyle: "xs", fontWeight: "semibold", px: "2", pt: "4", pb: "1.5" })

const isPage = (a: Page, b: Page) =>
  a.kind === b.kind && (a.kind === "components" || (a as { id: string }).id === (b as { id: string }).id)

const SidebarContext = createContext<{ studio: Studio; query: string } | null>(null)

function NavItem(props: { page: Page; label: string; icon: ReactNode }) {
  const { studio, query } = use(SidebarContext)!
  const { state, dispatch } = studio
  if (!props.label.toLowerCase().includes(query.trim().toLowerCase())) return null
  const modified =
    props.page.kind === "component" && listRules(state.doc, { recipe: components[props.page.id].recipe }).length > 0
  return (
    <button
      type="button"
      className={navItem}
      aria-selected={isPage(state.page, props.page)}
      onClick={() => dispatch({ type: "navigate", page: props.page })}
    >
      {props.icon}
      <styled.span flex="1">{props.label}</styled.span>
      {modified && <span className={dot} />}
    </button>
  )
}

function Foundation(props: { id: FoundationId; label: string; icon: ReactNode }) {
  return <NavItem page={{ kind: "foundation", id: props.id }} label={props.label} icon={props.icon} />
}

function Component(props: { id: ComponentId }) {
  return (
    <NavItem page={{ kind: "component", id: props.id }} label={components[props.id].label} icon={<ComponentIcon />} />
  )
}

export function Sidebar(props: { studio: Studio }) {
  const [query, setQuery] = useState("")

  return (
    <SidebarContext value={{ studio: props.studio, query }}>
      <styled.aside display="flex" flexDirection="column" minH="0" borderRightWidth="1px" borderColor="border.muted">
        <styled.div p="2" borderBottomWidth="1px" borderColor="border.muted">
          <styled.label
            display="flex"
            alignItems="center"
            gap="2"
            h="8"
            px="2"
            bg="bg.muted"
            borderRadius="md"
            color="fg.muted"
            css={{ "& svg": { w: "3.5", h: "3.5" } }}
          >
            <SearchIcon />
            <styled.input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search"
              flex="1"
              bg="transparent"
              outline="0"
              textStyle="xs"
              color="fg"
            />
          </styled.label>
        </styled.div>

        <styled.nav flex="1" minH="0" overflowY="auto" px="2" pb="4">
          <div className={heading}>Foundations</div>
          <Foundation id="overview" label="Overview" icon={<OverviewIcon />} />
          <Foundation id="color" label="Color" icon={<ColorIcon />} />
          <Foundation id="typography" label="Typography" icon={<TypeIcon />} />
          <Foundation id="radius" label="Radius" icon={<RadiusIcon />} />
          <Foundation id="shadow" label="Shadow" icon={<ShadowIcon />} />
          <Foundation id="spacing" label="Spacing" icon={<SpacingIcon />} />

          <div className={heading}>Components</div>
          <NavItem page={{ kind: "components" }} label="All components" icon={<ComponentIcon />} />
          <Component id="accordion" />
          <Component id="alert" />
          <Component id="avatar" />
          <Component id="badge" />
          <Component id="button" />
          <Component id="card" />
          <Component id="checkbox" />
          <Component id="drawer" />
          <Component id="hoverCard" />
          <Component id="input" />
          <Component id="kbd" />
          <Component id="menu" />
          <Component id="popover" />
          <Component id="radioCard" />
          <Component id="segmentGroup" />
          <Component id="select" />
          <Component id="slider" />
          <Component id="spinner" />
          <Component id="switch" />
          <Component id="tabs" />
          <Component id="tooltip" />
        </styled.nav>

        <ComponentLayers studio={props.studio} />
      </styled.aside>
    </SidebarContext>
  )
}

function ComponentLayers(props: { studio: Studio }) {
  const { state } = props.studio
  const page = state.page

  return (
    <styled.div borderTopWidth="1px" borderColor="border.muted" maxH="40%" display="flex" flexDirection="column">
      <div className={heading} style={{ paddingInline: "1rem" }}>
        Component Layers
      </div>
      {page.kind !== "component" ? (
        <styled.div display="flex" flexDirection="column" alignItems="center" gap="1" textAlign="center" px="6" py="6">
          <styled.span color="fg.muted" css={{ "& svg": { w: "4", h: "4" } }}>
            <LayersIcon />
          </styled.span>
          <styled.span textStyle="xs" fontWeight="medium">
            Open a component page
          </styled.span>
          <styled.span textStyle="xs" color="fg.muted">
            Pick a component above to edit its layers.
          </styled.span>
        </styled.div>
      ) : (
        <LayerTree studio={props.studio} recipeKey={components[page.id].recipe} label={components[page.id].label} />
      )}
      {state.selectedPart && page.kind === "component" && state.selectedPart.recipe !== components[page.id].recipe && (
        <styled.div px="2" pb="2">
          <LayerTree
            studio={props.studio}
            recipeKey={state.selectedPart.recipe}
            label={humanize(state.selectedPart.recipe)}
          />
        </styled.div>
      )}
    </styled.div>
  )
}

function LayerTree(props: { studio: Studio; recipeKey: string; label: string }) {
  const { state, dispatch } = props.studio
  const recipe = recipes[props.recipeKey]
  if (!recipe) return null
  const parts = recipe.slots ?? [undefined]

  const isSelected = (slot: string | undefined) =>
    state.selectedPart?.recipe === recipe.key && state.selectedPart.slot === slot
  const isModified = (slot: string | undefined) => listRules(state.doc, { recipe: recipe.key, slot }).length > 0

  return (
    <styled.div overflowY="auto" px="2" pb="2">
      {recipe.slots && (
        <styled.div className={navItem} color="fg.muted" cursor="default" _hover={{ bg: "transparent" }}>
          <ComponentIcon />
          {props.label}
        </styled.div>
      )}
      {parts.map((slot) => (
        <button
          type="button"
          key={slot ?? "root"}
          className={cx(navItem, recipe.slots && css({ ps: "6" }))}
          aria-selected={isSelected(slot)}
          onClick={() => dispatch({ type: "select-part", part: { recipe: recipe.key, slot } })}
        >
          <ComponentIcon />
          <styled.span flex="1">{slot ? humanize(slot) : props.label}</styled.span>
          {isModified(slot) && <span className={dot} />}
        </button>
      ))}
    </styled.div>
  )
}

export const humanize = (value: string) =>
  value.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/^./, (char) => char.toUpperCase())

function OverviewIcon() {
  return (
    <Icon>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </Icon>
  )
}

function ColorIcon() {
  return (
    <Icon>
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5S12.5 5 12 2.5C11.5 5 10 7.4 8 9s-3 3.5-3 5.5a7 7 0 0 0 7 7z" />
    </Icon>
  )
}

function TypeIcon() {
  return (
    <Icon>
      <path d="M4 20 10 4h4l6 16M7 14h10" />
    </Icon>
  )
}

function RadiusIcon() {
  return (
    <Icon>
      <path d="M4 20V10a6 6 0 0 1 6-6h10" />
    </Icon>
  )
}

function ShadowIcon() {
  return (
    <Icon>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3a9 9 0 0 1 0 18" fill="currentColor" />
    </Icon>
  )
}

function SpacingIcon() {
  return (
    <Icon>
      <path d="M5 3v18M19 3v18M9 12h6" />
    </Icon>
  )
}
