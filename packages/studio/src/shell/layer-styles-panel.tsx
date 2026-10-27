import { useState } from "react"
import { css } from "styled-system/css"
import { styled } from "styled-system/jsx"

import { type ColorMode, clearPresetOptions, setPresetOption } from "../lib/doc"
import {
  type PresetControls,
  type PresetOption,
  controlsForLayerStyle,
  presetTokens,
  presetValue,
} from "../lib/presets"
import { type LayerStyleEntry, layerStyles } from "../lib/theme-meta"
import {
  CloseIcon,
  IconButton,
  Muted,
  NumberField,
  PanelSection,
  ResetIcon,
  TextInput,
  Toggle,
  ToggleItem,
  dot,
  floating,
  panelHeader,
  useEscape,
} from "./ui"
import type { Studio } from "./use-studio"

const row = css({
  display: "flex",
  alignItems: "center",
  gap: "3",
  h: "8",
  px: "2",
  mx: "-2",
  borderRadius: "md",
  textStyle: "sm",
  textAlign: "start",
  cursor: "pointer",
  _hover: { bg: "bg.muted" },
  "&[data-selected]": { bg: "bg.emphasized" },
})

const badge = css({
  px: "1.5",
  borderRadius: "full",
  bg: "bg.muted",
  color: "fg.muted",
  fontSize: "10px",
  lineHeight: "16px",
})

const styleList = css({
  fontFamily: "mono",
  fontSize: "11px",
  lineHeight: "1.6",
  bg: "bg.subtle",
  borderRadius: "md",
  px: "3",
  py: "2",
  wordBreak: "break-all",
})

export function LayerStylesPanel(props: { studio: Studio }) {
  const [editing, setEditing] = useState<string>()
  const entry = layerStyles.find((style) => style.name === editing)

  return (
    <>
      <PanelSection title="Layer styles">
        {layerStyles.length === 0 && <Muted>The theme defines no layer styles.</Muted>}
        {layerStyles.map((style) => {
          const controls = controlsForLayerStyle(style.name)
          return (
            <button
              key={style.name}
              type="button"
              className={row}
              data-selected={editing === style.name || undefined}
              onClick={() => setEditing(style.name)}
            >
              <styled.span flex="1" truncate>
                {style.name}
              </styled.span>
              {controls && <span className={badge}>preset</span>}
              {controls && props.studio.state.doc.presets?.[controls.package] && <span className={dot} />}
            </button>
          )
        })}
      </PanelSection>
      {entry && (
        <LayerStyleEditor key={entry.name} studio={props.studio} entry={entry} onClose={() => setEditing(undefined)} />
      )}
    </>
  )
}

function LayerStyleEditor(props: { studio: Studio; entry: LayerStyleEntry; onClose: () => void }) {
  const { studio, entry } = props
  const controls = controlsForLayerStyle(entry.name)
  const [condition, setCondition] = useState<ColorMode>(studio.state.colorMode)
  useEscape(props.onClose)

  return (
    <div className={floating} style={{ right: "calc(20rem + 12px)" }}>
      <div className={panelHeader}>
        Edit layer style
        <IconButton label="Close" onClick={props.onClose}>
          <CloseIcon />
        </IconButton>
      </div>
      {controls && <Preview studio={studio} entry={entry} controls={controls} condition={condition} />}
      <styled.div display="grid" gridTemplateColumns="5rem 1fr" alignItems="center" gap="2" px="4" py="3">
        <Muted>Name</Muted>
        <TextInput value={entry.name} readOnly aria-label="Name" />
        {controls && (
          <>
            <Muted>Condition</Muted>
            <Toggle aria-label="Condition" value={condition} onChange={setCondition}>
              <ToggleItem value="base">base</ToggleItem>
              <ToggleItem value="_dark">_dark</ToggleItem>
            </Toggle>
            <Muted>Preset</Muted>
            <styled.span fontFamily="mono" fontSize="11px" truncate title={controls.package}>
              {controls.package}
            </styled.span>
          </>
        )}
      </styled.div>
      <styled.div display="flex" flexDirection="column" gap="2" px="4" pb="3">
        <styled.span textStyle="sm" fontWeight="semibold">
          Styles
        </styled.span>
        <div className={styleList}>
          {Object.entries(entry.styles).map(([property, value]) => (
            <div key={property}>
              {property}: {typeof value === "string" ? value : JSON.stringify(value)}
            </div>
          ))}
        </div>
      </styled.div>
      {controls && <PresetOptions studio={studio} controls={controls} condition={condition} />}
    </div>
  )
}

function Preview(props: { studio: Studio; entry: LayerStyleEntry; controls: PresetControls; condition: ColorMode }) {
  const { tokens, semanticTokens } = presetTokens(props.studio.state.doc, props.controls)
  const resolve = (value: string) =>
    value.replace(/\{([^}]+)\}/g, (match, key: string) => {
      const semantic = semanticTokens[key]
      return (semantic ? (semantic[props.condition] ?? semantic.base) : tokens[key]) ?? match
    })
  const style = Object.fromEntries(
    Object.entries(props.entry.styles)
      .filter((entry): entry is [string, string] => typeof entry[1] === "string")
      .map(([property, value]) => [property, resolve(value)]),
  )

  return (
    <styled.div
      h="40"
      borderBottomWidth="1px"
      borderColor="border.muted"
      bg={props.condition === "_dark" ? "#2a2a2a" : "white"}
      style={style}
    />
  )
}

function PresetOptions(props: { studio: Studio; controls: PresetControls; condition: ColorMode }) {
  const { studio, controls, condition } = props
  const shared = controls.options.filter((option) => !option.condition)
  const conditional = controls.options.filter((option) => option.condition === condition)
  const edited = !!studio.state.doc.presets?.[controls.package]

  return (
    <styled.div display="flex" flexDirection="column" gap="2" px="4" pb="4">
      <styled.div display="flex" alignItems="center" justifyContent="space-between" h="7">
        <styled.span textStyle="sm" fontWeight="semibold">
          Preset options
        </styled.span>
        <IconButton
          label="Reset preset options"
          disabled={!edited}
          onClick={() => studio.edit((doc) => clearPresetOptions(doc, controls.package))}
        >
          <ResetIcon />
        </IconButton>
      </styled.div>
      {shared.map((option) => (
        <OptionRow key={option.path} studio={studio} controls={controls} option={option} />
      ))}
      {conditional.length > 0 && (
        <styled.span textStyle="xs" fontWeight="semibold" color="fg.muted" pt="1">
          {condition}
        </styled.span>
      )}
      {conditional.map((option) => (
        <OptionRow key={option.path} studio={studio} controls={controls} option={option} />
      ))}
    </styled.div>
  )
}

function OptionRow(props: { studio: Studio; controls: PresetControls; option: PresetOption }) {
  const { studio, controls, option } = props
  const { doc } = studio.state
  const edited = doc.presets?.[controls.package]?.[option.path] !== undefined

  return (
    <styled.div display="grid" gridTemplateColumns="6rem 1fr auto" alignItems="center" gap="2">
      <styled.span fontFamily="mono" fontSize="11px" color="fg.muted" truncate title={option.path}>
        {option.path}
      </styled.span>
      <NumberField
        label={option.path}
        handle="⇔"
        value={presetValue(doc, controls, option.path)}
        min={option.min}
        max={option.max}
        step={option.step}
        onChange={(value) =>
          studio.edit(
            (current) => setPresetOption(current, controls.package, option.path, value),
            `preset:${controls.package}:${option.path}`,
          )
        }
      />
      <styled.span display="flex" w="1.5">
        {edited && <span className={dot} />}
      </styled.span>
    </styled.div>
  )
}
