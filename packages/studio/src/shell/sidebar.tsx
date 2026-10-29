import { type ReactNode, createContext, use, useState } from "react"
import { css } from "styled-system/css"
import { styled } from "styled-system/jsx"

import { components } from "../components"
import { isCompoundScope, listRules } from "../lib/doc"
import type { ComponentId, FoundationId, LayerNode, Page } from "../lib/messages"
import { orderedValues, primaryVariant, recipeStates, simulatableStates, stateLabel } from "../lib/states"
import { type RecipeMeta, partLabel, recipes } from "../lib/theme-meta"
import { recipeCompounds, scopeTitle } from "./part-style-panel"
import { ComponentIcon, Icon, LayersIcon, ResizeHandle, SearchIcon, SelectInput, dot, useStoredSize } from "./ui"
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
  cursor: "button",
  textAlign: "start",
  _hover: { bg: "bg.muted" },
  _selected: { bg: "bg.emphasized", fontWeight: "medium" },
  "& svg": { w: "3.5", h: "3.5", color: "fg.muted", flexShrink: "0" },
})

const heading = css({ textStyle: "xs", fontWeight: "semibold", px: "2", pt: "4", pb: "1.5" })

const SidebarContext = createContext<{ studio: Studio; query: string } | null>(null)

function NavItem(props: { page: Page; label: string; icon: ReactNode }) {
  const { page } = props
  const { studio, query } = use(SidebarContext)!
  const { state, dispatch } = studio
  if (!props.label.toLowerCase().includes(query.trim().toLowerCase())) return null
  const modified = page.kind === "component" && listRules(state.doc, { recipe: components[page.id].recipe }).length > 0
  return (
    <button
      type="button"
      className={navItem}
      aria-selected={state.page.kind === page.kind && state.page.id === page.id}
      onClick={() => dispatch({ type: "navigate", page })}
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

export function Sidebar(props: { studio: Studio; width: number; onResize: (width: number) => void }) {
  const [query, setQuery] = useState("")

  return (
    <SidebarContext value={{ studio: props.studio, query }}>
      <styled.aside
        position="relative"
        display="flex"
        flexDirection="column"
        minH="0"
        minW="0"
        borderRightWidth="1px"
        borderColor="border.muted"
      >
        <ResizeHandle orientation="vertical" size={props.width} onResize={props.onResize} label="Resize sidebar" />
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
          <Component id="accordion" />
          <Component id="alert" />
          <Component id="avatar" />
          <Component id="badge" />
          <Component id="button" />
          <Component id="card" />
          <Component id="checkbox" />
          <Component id="closeButton" />
          <Component id="drawer" />
          <Component id="hoverCard" />
          <Component id="iconButton" />
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
  const [height, setHeight] = useStoredSize("layers-height", 320, 120, 720)
  const recipeKey = state.page.kind === "component" ? components[state.page.id].recipe : undefined
  const recipe = recipeKey ? recipes[recipeKey] : undefined

  // Slots of the page's component that the demos don't render, so they stay editable
  const rendered = new Set<string>()
  const walk = (nodes: LayerNode[]) => {
    for (const node of nodes) {
      if (node.recipe === recipeKey) rendered.add(node.slot ?? "")
      walk(node.children)
    }
  }
  walk(state.layers)
  const unrendered = (recipe?.slots ?? []).filter((slot) => !rendered.has(slot))

  return (
    <styled.div
      position="relative"
      flexShrink="0"
      borderTopWidth="1px"
      borderColor="border.muted"
      display="flex"
      flexDirection="column"
      style={{ height, maxHeight: "calc(100% - 8rem)" }}
    >
      <ResizeHandle orientation="horizontal" size={height} onResize={setHeight} label="Resize component layers" />
      {recipe && <Variations studio={props.studio} recipe={recipe} />}
      <div className={heading} style={{ paddingInline: "1rem" }}>
        Component Layers
      </div>
      {state.layers.length === 0 ? (
        <styled.div display="flex" flexDirection="column" alignItems="center" gap="1" textAlign="center" px="6" py="6">
          <styled.span color="fg.muted" css={{ "& svg": { w: "4", h: "4" } }}>
            <LayersIcon />
          </styled.span>
          <styled.span textStyle="xs" fontWeight="medium">
            No components on this page
          </styled.span>
          <styled.span textStyle="xs" color="fg.muted">
            Open a component page to edit its layers.
          </styled.span>
        </styled.div>
      ) : (
        <styled.div
          role="tree"
          aria-label="Component layers"
          flex="1"
          minH="0"
          overflowY="auto"
          px="2"
          pb="3"
          onMouseLeave={() => props.studio.dispatch({ type: "hover-part", part: undefined })}
        >
          <LayerList studio={props.studio} nodes={state.layers} depth={0} path="" />
          {recipe && unrendered.length > 0 && (
            <>
              <styled.div textStyle="2xs" color="fg.subtle" px="2" pt="3" pb="1">
                Not rendered in the demos
              </styled.div>
              <LayerList
                studio={props.studio}
                nodes={unrendered.map((slot) => ({ recipe: recipe.key, slot, children: [] }))}
                depth={0}
                path="unrendered"
              />
            </>
          )}
        </styled.div>
      )}
    </styled.div>
  )
}

const layerRow = css({
  display: "flex",
  alignItems: "center",
  gap: "1.5",
  w: "full",
  h: "7",
  pe: "2",
  textStyle: "xs",
  color: "fg",
  borderRadius: "md",
  cursor: "button",
  textAlign: "start",
  whiteSpace: "nowrap",
  _hover: { bg: "bg.muted" },
  _selected: { bg: "bg.emphasized", fontWeight: "medium" },
  "& svg": { w: "3.5", h: "3.5", color: "fg.muted", flexShrink: "0" },
})

const chevron = css({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  w: "4",
  h: "4",
  flexShrink: "0",
  borderRadius: "sm",
  color: "fg.muted",
  _hover: { bg: "bg.emphasized" },
  "& svg": { w: "3", h: "3", transition: "rotate 0.15s" },
  "&[data-collapsed] svg": { rotate: "-90deg" },
})

function LayerList(props: { studio: Studio; nodes: LayerNode[]; depth: number; path: string }) {
  return (
    <>
      {props.nodes.map((node) => {
        const key = `${props.path}/${node.recipe}|${node.slot ?? ""}`
        return <Layer key={key} studio={props.studio} node={node} depth={props.depth} path={key} />
      })}
    </>
  )
}

function Layer(props: { studio: Studio; node: LayerNode; depth: number; path: string }) {
  const { studio, node, depth } = props
  const { state, dispatch } = studio
  const [collapsed, setCollapsed] = useState(false)
  const part = { recipe: node.recipe, slot: node.slot }
  const selected = state.selectedPart?.recipe === node.recipe && state.selectedPart.slot === node.slot
  const modified = listRules(state.doc, part).length > 0
  const hasChildren = node.children.length > 0

  return (
    <>
      <div
        role="treeitem"
        tabIndex={0}
        aria-selected={selected}
        aria-expanded={hasChildren ? !collapsed : undefined}
        className={layerRow}
        style={{ paddingInlineStart: `${depth * 14 + 4}px` }}
        title={partLabel(part)}
        onClick={() => dispatch({ type: "select-part", part })}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault()
            dispatch({ type: "select-part", part })
          }
          if (event.key === "ArrowLeft" && hasChildren) setCollapsed(true)
          if (event.key === "ArrowRight" && hasChildren) setCollapsed(false)
        }}
        onMouseEnter={() => dispatch({ type: "hover-part", part })}
      >
        {hasChildren ? (
          <span
            className={chevron}
            data-collapsed={collapsed ? "" : undefined}
            onClick={(event) => {
              event.stopPropagation()
              setCollapsed(!collapsed)
            }}
          >
            <Icon>
              <path d="m6 9 6 6 6-6" />
            </Icon>
          </span>
        ) : (
          <styled.span w="4" flexShrink="0" />
        )}
        <ComponentIcon />
        <styled.span flex="1" truncate>
          {partLabel(part)}
        </styled.span>
        {modified && <span className={dot} />}
      </div>
      {hasChildren && !collapsed && (
        <LayerList studio={studio} nodes={node.children} depth={depth + 1} path={props.path} />
      )}
    </>
  )
}

const sectionHeader = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "1",
  ps: "2",
  pe: "1",
  pt: "3",
  pb: "1",
})

const subheading = css({
  textStyle: "2xs",
  fontFamily: "mono",
  color: "fg.subtle",
  px: "2",
  pt: "2",
  pb: "0.5",
})

function Variations(props: { studio: Studio; recipe: RecipeMeta }) {
  const { studio, recipe } = props
  const { state, dispatch } = studio
  const [open, setOpen] = useState(true)
  const rules = listRules(state.doc, { recipe: recipe.key })
  const primary = primaryVariant(recipe)
  const names = Object.keys(recipe.variantMap).sort((a, b) => Number(b === primary) - Number(a === primary))
  const compounds = recipeCompounds(recipe, rules, state.scope)
  const states = recipeStates(recipe, state.doc, state.addedStates[recipe.key])
  const addable = simulatableStates.filter((name) => !states.includes(name))

  const scopeItem = (scope: string, label: string) => (
    <button
      type="button"
      key={scope}
      className={layerRow}
      style={{ paddingInlineStart: "8px" }}
      aria-selected={state.scope === scope}
      onClick={() => dispatch({ type: "scope", scope })}
    >
      <VariationIcon />
      <styled.span flex="1" truncate>
        {label}
      </styled.span>
      {rules.some((rule) => rule.scope === scope) && <span className={dot} />}
    </button>
  )

  return (
    <styled.div
      flexShrink="0"
      maxH="50%"
      overflowY="auto"
      px="2"
      pb="2"
      borderBottomWidth="1px"
      borderColor="border.muted"
    >
      <div className={sectionHeader}>
        <styled.button
          type="button"
          display="flex"
          alignItems="center"
          gap="1"
          textStyle="xs"
          fontWeight="semibold"
          cursor="button"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className={chevron} data-collapsed={open ? undefined : ""}>
            <Icon>
              <path d="m6 9 6 6 6-6" />
            </Icon>
          </span>
          Variations
        </styled.button>
      </div>
      {open && (
        <>
          {scopeItem("base", "All variants")}
          {names.map((name) => (
            <div key={name}>
              <div className={subheading}>{name}</div>
              {orderedValues(recipe, name).map((value) => scopeItem(`${name}:${value}`, value))}
            </div>
          ))}
          {compounds.length > 0 && (
            <div>
              <div className={subheading}>◇ compound</div>
              {compounds.filter(isCompoundScope).map((scope) => scopeItem(scope, scopeTitle(scope)))}
            </div>
          )}
          <styled.div display="flex" alignItems="center" justifyContent="space-between" pe="1">
            <div className={subheading}>state</div>
            <SelectInput
              aria-label="Add a state"
              value={undefined}
              placeholder="+ state"
              variant="ghost"
              className={css({ w: "auto", mt: "1.5" })}
              options={addable.map((name) => ({ value: name, label: name }))}
              onValueChange={(value) => {
                dispatch({ type: "add-state", recipe: recipe.key, condition: value })
                dispatch({ type: "condition", condition: value })
              }}
            />
          </styled.div>
          {states.map((condition) => (
            <button
              type="button"
              key={condition || "default"}
              className={layerRow}
              style={{ paddingInlineStart: "8px" }}
              aria-selected={state.condition === condition}
              onClick={() => dispatch({ type: "condition", condition })}
            >
              <StateIcon />
              <styled.span flex="1" truncate>
                {stateLabel(condition)}
              </styled.span>
              {condition && rules.some((rule) => rule.state === condition) && <span className={dot} />}
            </button>
          ))}
        </>
      )}
    </styled.div>
  )
}

function VariationIcon() {
  return (
    <Icon>
      <rect x="3" y="3" width="7" height="7" rx="2" />
      <rect x="14" y="3" width="7" height="7" rx="2" fill="currentColor" />
      <rect x="3" y="14" width="7" height="7" rx="2" />
      <rect x="14" y="14" width="7" height="7" rx="2" />
    </Icon>
  )
}

function StateIcon() {
  return (
    <Icon>
      <path d="M9 9l5 12 1.8-5.2L21 14Z" />
      <path d="M7.2 2.2 8 5.1M5.1 8l-2.9-.8M14 4.1 12 6.5M6.5 12 4.1 14" />
    </Icon>
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
