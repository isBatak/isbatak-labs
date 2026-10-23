import { type RadiusPreset, radiusScale } from "@isbatak/panda-ds/radius"
import { useState } from "react"
import { styled } from "styled-system/jsx"

import { type StudioDoc, countOverrides, emptyDoc, listRules, setSemanticToken, setToken } from "../lib/doc"
import { type TokenEntry, getToken, listTokens } from "../lib/theme-meta"
import { Field } from "./fields"
import { humanize } from "./sidebar"
import { Muted, PanelSection, Toggle, ToggleItem } from "./ui"
import type { Studio } from "./use-studio"

function originalValue(entry: TokenEntry, mode: "base" | "_dark") {
  if (typeof entry.value === "string") return entry.value
  return entry.value[mode] ?? entry.value.base
}

export function TokenField(props: { studio: Studio; entry: TokenEntry; label?: string; autoOpen?: boolean }) {
  const { studio, entry } = props
  const { doc, colorMode } = studio.state
  const key = `${entry.category}.${entry.name}`
  const color = entry.category === "colors"

  if (entry.semantic) {
    const mode = typeof entry.value === "string" ? "base" : colorMode
    return (
      <Field
        autoOpen={props.autoOpen}
        label={props.label ?? entry.name}
        value={doc.semanticTokens[key]?.[mode]}
        inherited={originalValue(entry, mode)}
        category={entry.category}
        references
        color={color}
        onChange={(value) => studio.edit((d) => setSemanticToken(d, key, mode, value), `${key}:${mode}`)}
      />
    )
  }

  return (
    <Field
      autoOpen={props.autoOpen}
      label={props.label ?? entry.name}
      value={doc.tokens[key]}
      inherited={String(entry.value)}
      color={color}
      onChange={(value) => studio.edit((d) => setToken(d, key, value), key)}
    />
  )
}

function TokenGroup(props: { studio: Studio; title: string; entries: TokenEntry[] }) {
  if (!props.entries.length) return null
  return (
    <PanelSection title={props.title}>
      {props.entries.map((entry) => (
        <TokenField key={`${entry.name}-${entry.semantic}`} studio={props.studio} entry={entry} />
      ))}
    </PanelSection>
  )
}

function ModeToggle(props: { studio: Studio }) {
  const { state, dispatch } = props.studio
  return (
    <styled.div display="flex" alignItems="center" justifyContent="space-between" px="4" py="3">
      <Muted>Editing</Muted>
      <Toggle
        aria-label="Color mode"
        value={state.colorMode}
        onChange={(colorMode) => dispatch({ type: "color-mode", colorMode })}
      >
        <ToggleItem value="base">Light</ToggleItem>
        <ToggleItem value="_dark">Dark</ToggleItem>
      </Toggle>
    </styled.div>
  )
}

function SelectedToken(props: { studio: Studio }) {
  const token = props.studio.state.selectedToken
  if (!token) return null
  const [category, ...rest] = token.split(".")
  const entry = getToken(category!, rest.join("."))
  if (!entry) return null
  return (
    <PanelSection title="Selected">
      {/* Keyed so a newly clicked swatch opens its picker */}
      <TokenField key={token} studio={props.studio} entry={entry} autoOpen={entry.category === "colors"} />
    </PanelSection>
  )
}

export function ColorPanel(props: { studio: Studio }) {
  const semantic = listTokens("colors", { semantic: true })
  const groups = new Map<string, TokenEntry[]>()
  for (const entry of semantic) {
    const group = entry.name.split(".")[0]!
    groups.set(group, [...(groups.get(group) ?? []), entry])
  }
  const scales = new Map<string, TokenEntry[]>()
  for (const entry of listTokens("colors", { semantic: false })) {
    if (!/^[a-z]+\.\d+$/.test(entry.name)) continue
    const group = entry.name.split(".")[0]!
    scales.set(group, [...(scales.get(group) ?? []), entry])
  }

  return (
    <>
      <ModeToggle studio={props.studio} />
      <SelectedToken studio={props.studio} />
      {Array.from(groups.entries()).map(([group, entries]) => (
        <TokenGroup key={group} studio={props.studio} title={humanize(group)} entries={entries} />
      ))}
      {Array.from(scales.entries()).map(([group, entries]) => (
        <TokenGroup key={group} studio={props.studio} title={`${humanize(group)} scale`} entries={entries} />
      ))}
    </>
  )
}

export function TypographyPanel(props: { studio: Studio }) {
  return (
    <>
      <TokenGroup studio={props.studio} title="Font families" entries={listTokens("fonts")} />
      <TokenGroup studio={props.studio} title="Font sizes" entries={listTokens("fontSizes")} />
      <TokenGroup studio={props.studio} title="Font weights" entries={listTokens("fontWeights")} />
      <TokenGroup studio={props.studio} title="Line heights" entries={listTokens("lineHeights")} />
      <TokenGroup studio={props.studio} title="Letter spacings" entries={listTokens("letterSpacings")} />
    </>
  )
}

function applyRadiusPreset(doc: StudioDoc, preset: RadiusPreset) {
  let next = doc
  for (const level of ["l1", "l2", "l3"] as const) {
    next = setSemanticToken(next, `radii.${level}`, "base", `{radii.${radiusScale[preset][level]}}`)
  }
  return next
}

function RadiusPresetButton(props: { studio: Studio; preset: RadiusPreset }) {
  const { studio, preset } = props
  const active = studio.state.doc.semanticTokens["radii.l2"]?.base === `{radii.${radiusScale[preset].l2}}`
  return (
    <styled.button
      type="button"
      h="8"
      textStyle="xs"
      borderWidth="1px"
      borderColor={active ? "blue.500" : "border"}
      bg={active ? "blue.50" : "bg"}
      borderRadius="md"
      cursor="pointer"
      onClick={() => studio.edit((doc) => applyRadiusPreset(doc, preset))}
    >
      {preset}
    </styled.button>
  )
}

export function RadiusPanel(props: { studio: Studio }) {
  const { studio } = props
  return (
    <>
      <PanelSection title="Preset">
        <Muted>Sets the l1, l2 and l3 levels components use.</Muted>
        <styled.div display="grid" gridTemplateColumns="repeat(4, 1fr)" gap="1.5">
          <RadiusPresetButton studio={studio} preset="none" />
          <RadiusPresetButton studio={studio} preset="xs" />
          <RadiusPresetButton studio={studio} preset="sm" />
          <RadiusPresetButton studio={studio} preset="md" />
          <RadiusPresetButton studio={studio} preset="lg" />
          <RadiusPresetButton studio={studio} preset="xl" />
          <RadiusPresetButton studio={studio} preset="2xl" />
        </styled.div>
      </PanelSection>
      <TokenGroup studio={studio} title="Levels" entries={listTokens("radii", { semantic: true })} />
      <TokenGroup studio={studio} title="Scale" entries={listTokens("radii", { semantic: false })} />
    </>
  )
}

export function ShadowPanel(props: { studio: Studio }) {
  return (
    <>
      <ModeToggle studio={props.studio} />
      <SelectedToken studio={props.studio} />
      <TokenGroup studio={props.studio} title="Shadows" entries={listTokens("shadows")} />
    </>
  )
}

export function SpacingPanel(props: { studio: Studio }) {
  return (
    <>
      <TokenGroup studio={props.studio} title="Spacing" entries={listTokens("spacing")} />
      <TokenGroup
        studio={props.studio}
        title="Sizes"
        entries={listTokens("sizes").filter((e) => !e.name.includes("/"))}
      />
    </>
  )
}

/** Summary of every edit in the current theme */
export function OverviewPanel(props: { studio: Studio }) {
  const { studio } = props
  const { doc } = studio.state
  const rules = listRules(doc)
  const recipesEdited = new Set(rules.map((rule) => rule.recipe))

  const lightTokens = Object.values(doc.semanticTokens).filter((value) => value.base).length
  const darkTokens = Object.values(doc.semanticTokens).filter((value) => value._dark).length

  return (
    <>
      <PanelSection title="System">
        <styled.span textStyle="xs" fontWeight="semibold" mt="-1">
          Identity
        </styled.span>
        <InfoRow label="Name" value={studio.state.themeName} />
        <InfoRow label="Design system" value="@isbatak/panda-ds" />
      </PanelSection>
      <PanelSection title="Foundation">
        <InfoRow label="Body font" value={fontName(tokenValueOf(doc, "fonts.body"))} />
        <InfoRow label="Heading font" value={fontName(tokenValueOf(doc, "fonts.heading"))} />
        <InfoRow label="Radius" value={radiusValue(doc)} />
        <InfoRow
          label="Solid color"
          value={semanticValueOf(doc, "colors.gray.solid").replace(/^\{colors\.|\}$/g, "")}
        />
      </PanelSection>
      <PanelSection title="Changes">
        <InfoRow label="Light tokens" value={String(lightTokens)} />
        <InfoRow label="Dark tokens" value={String(darkTokens)} />
        <InfoRow label="Theme values" value={String(Object.keys(doc.tokens).length)} />
        <InfoRow label="Component rules" value={String(rules.length)} />
      </PanelSection>
      <PanelSection title="Actions">
        <ThemeActions studio={studio} />
      </PanelSection>
      {Object.keys(doc.tokens).length > 0 && (
        <PanelSection title="Tokens">
          {Object.entries(doc.tokens).map(([key, value]) => (
            <EditRow
              key={key}
              label={key}
              value={value}
              onRemove={() => studio.edit((d) => setToken(d, key, undefined))}
            />
          ))}
        </PanelSection>
      )}
      {Object.keys(doc.semanticTokens).length > 0 && (
        <PanelSection title="Semantic tokens">
          {Object.entries(doc.semanticTokens).map(([key, value]) => (
            <EditRow
              key={key}
              label={key}
              value={[value.base && `light ${value.base}`, value._dark && `dark ${value._dark}`]
                .filter(Boolean)
                .join(" · ")}
              onRemove={() =>
                studio.edit((d) =>
                  setSemanticToken(setSemanticToken(d, key, "base", undefined), key, "_dark", undefined),
                )
              }
            />
          ))}
        </PanelSection>
      )}
      {recipesEdited.size > 0 && (
        <PanelSection title="Components">
          {Array.from(recipesEdited).map((recipe) => (
            <EditRow
              key={recipe}
              label={humanize(recipe)}
              value={`${rules.filter((rule) => rule.recipe === recipe).length} rules`}
            />
          ))}
        </PanelSection>
      )}
    </>
  )
}

function EditRow(props: { label: string; value: string; onRemove?: () => void }) {
  return (
    <styled.div display="flex" alignItems="center" gap="2" textStyle="xs">
      <styled.span flex="1" truncate>
        {props.label}
      </styled.span>
      <styled.span fontFamily="mono" color="fg.muted" truncate maxW="50%">
        {props.value}
      </styled.span>
      {props.onRemove && (
        <styled.button
          type="button"
          color="fg.subtle"
          cursor="pointer"
          _hover={{ color: "fg.error" }}
          onClick={props.onRemove}
        >
          ✕
        </styled.button>
      )}
    </styled.div>
  )
}

function InfoRow(props: { label: string; value: string }) {
  return (
    <styled.div display="flex" justifyContent="space-between" gap="3" textStyle="xs" py="0.5">
      <styled.span color="fg.muted">{props.label}</styled.span>
      <styled.span truncate textAlign="end" fontVariantNumeric="tabular-nums" title={props.value}>
        {props.value}
      </styled.span>
    </styled.div>
  )
}

function tokenValueOf(doc: StudioDoc, key: string) {
  const [category, ...rest] = key.split(".")
  return doc.tokens[key] ?? String(getToken(category!, rest.join("."))?.value ?? "")
}

function semanticValueOf(doc: StudioDoc, key: string) {
  const [category, ...rest] = key.split(".")
  const value = getToken(category!, rest.join("."))?.value
  return doc.semanticTokens[key]?.base ?? (typeof value === "string" ? value : (value?.base ?? ""))
}

/** First family of a font stack, without quotes */
const fontName = (stack: string) =>
  stack
    .split(",")[0]!
    .trim()
    .replace(/^["']|["']$/g, "")

/** The `l2` radius components use, resolved to a length */
function radiusValue(doc: StudioDoc) {
  const level = semanticValueOf(doc, "radii.l2")
  const match = level.match(/^\{radii\.([^}]+)\}$/)
  return match ? `${tokenValueOf(doc, `radii.${match[1]}`)} (${match[1]})` : level
}

const actionButton = {
  h: "8",
  w: "full",
  textStyle: "xs",
  fontWeight: "medium",
  borderRadius: "md",
  cursor: "pointer",
} as const

function ThemeActions(props: { studio: Studio }) {
  const { state, dispatch } = props.studio
  const [confirming, setConfirming] = useState(false)

  const duplicate = () => {
    let name = `${state.themeName}-copy`
    for (let index = 2; name in state.themes; index++) name = `${state.themeName}-copy-${index}`
    dispatch({ type: "switch-theme", name, doc: structuredClone(state.doc) })
  }

  return (
    <>
      <styled.button
        type="button"
        {...actionButton}
        borderWidth="1px"
        borderColor="border"
        _hover={{ bg: "bg.muted" }}
        onClick={duplicate}
      >
        Duplicate system
      </styled.button>
      {countOverrides(state.doc) > 0 && (
        <styled.button
          type="button"
          {...actionButton}
          borderWidth="1px"
          borderColor="border"
          _hover={{ bg: "bg.muted" }}
          onClick={() => props.studio.edit(() => emptyDoc())}
        >
          Reset all {countOverrides(state.doc)} edits
        </styled.button>
      )}
      <styled.button
        type="button"
        {...actionButton}
        bg="red.100"
        color="red.800"
        _hover={{ bg: "red.200" }}
        onBlur={() => setConfirming(false)}
        onClick={() => {
          if (!confirming) return setConfirming(true)
          setConfirming(false)
          dispatch({ type: "delete-theme", name: state.themeName })
        }}
      >
        {confirming ? `Delete “${state.themeName}”? Click again` : "Delete system"}
      </styled.button>
    </>
  )
}
