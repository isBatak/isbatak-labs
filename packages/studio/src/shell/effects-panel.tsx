import { type PointerEvent, useEffect, useState } from "react"
import { css, cx } from "styled-system/css"
import { styled } from "styled-system/jsx"

import { type ColorMode, setSemanticToken, setToken } from "../lib/doc"
import {
  type ShadowLayer,
  layerColor,
  parseShadow,
  resolveForPreview,
  serializeShadow,
  tokenValue,
} from "../lib/shadow"
import { type TokenEntry, listTokens } from "../lib/theme-meta"
import { ColorPill, ColorTokenPicker } from "./color-token-picker"
import { Icon, IconButton, Muted, NativeSelect, PanelSection, TextInput } from "./ui"
import type { Studio } from "./use-studio"

interface EditingTarget {
  entry: TokenEntry
  mode: ColorMode
}

const modesOf = (entry: TokenEntry): ColorMode[] =>
  entry.semantic && typeof entry.value === "object" ? ["base", "_dark"] : ["base"]

const keyOf = (entry: TokenEntry) => `shadows.${entry.name}`

export function EffectsPanel(props: { studio: Studio }) {
  const shadows = listTokens("shadows").filter(
    (entry, index, all) => all.findIndex((other) => other.name === entry.name) === index,
  )
  const [editing, setEditing] = useState<EditingTarget>()
  const conditional = shadows.some((entry) => modesOf(entry).length > 1)
  const groups: Array<[ColorMode, string]> = conditional
    ? [
        ["base", "Light"],
        ["_dark", "Dark"],
      ]
    : [["base", "Shadows"]]

  return (
    <>
      {groups.map(([mode, title]) => (
        <PanelSection key={mode} title={title}>
          {shadows
            .filter((entry) => modesOf(entry).includes(mode))
            .map((entry) => (
              <EffectRow
                key={entry.name}
                studio={props.studio}
                entry={entry}
                mode={mode}
                selected={editing?.entry.name === entry.name && editing.mode === mode}
                onSelect={() => setEditing({ entry, mode })}
              />
            ))}
        </PanelSection>
      ))}
      {editing && (
        <EffectEditor
          key={`${editing.entry.name}:${editing.mode}`}
          studio={props.studio}
          target={editing}
          onClose={() => setEditing(undefined)}
        />
      )}
    </>
  )
}

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

function EffectRow(props: {
  studio: Studio
  entry: TokenEntry
  mode: ColorMode
  selected: boolean
  onSelect: () => void
}) {
  const { doc } = props.studio.state
  const value = tokenValue(doc, "shadows", props.entry.name, props.mode)
  const edited = !!doc.semanticTokens[keyOf(props.entry)]?.[props.mode] || !!doc.tokens[keyOf(props.entry)]
  return (
    <button type="button" className={row} data-selected={props.selected || undefined} onClick={props.onSelect}>
      <Swatch shadow={resolveForPreview(doc, value, props.mode)} mode={props.mode} size="4" />
      <styled.span flex="1" truncate>
        {props.entry.name}
      </styled.span>
      {edited && <styled.span w="1.5" h="1.5" borderRadius="full" bg="blue.500" />}
    </button>
  )
}

function Swatch(props: { shadow: string; mode: ColorMode; size: string }) {
  return (
    <styled.span
      flexShrink="0"
      w={props.size}
      h={props.size}
      borderRadius="sm"
      bg={props.mode === "_dark" ? "#2a2a2a" : "white"}
      style={{ boxShadow: props.shadow }}
    />
  )
}

const floating = css({
  position: "fixed",
  top: "16",
  w: "19rem",
  zIndex: "popover",
  bg: "bg.panel",
  borderRadius: "xl",
  boxShadow: "lg",
  borderWidth: "1px",
  borderColor: "border.muted",
  overflow: "hidden",
})

const panelHeader = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "2",
  h: "11",
  ps: "4",
  pe: "2",
  borderBottomWidth: "1px",
  borderColor: "border.muted",
  textStyle: "sm",
  fontWeight: "semibold",
})

function useEscape(onClose: () => void) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && onClose()
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onClose])
}

function EffectEditor(props: { studio: Studio; target: EditingTarget; onClose: () => void }) {
  const { studio, target } = props
  const { doc } = studio.state
  const key = keyOf(target.entry)
  const [layers, setLayers] = useState(() => parseShadow(tokenValue(doc, "shadows", target.entry.name, target.mode)))
  const [selected, setSelected] = useState<number>()
  useEscape(props.onClose)

  const update = (next: ShadowLayer[]) => {
    setLayers(next)
    const value = serializeShadow(next)
    studio.edit(
      (current) =>
        target.entry.semantic
          ? setSemanticToken(current, key, modesOf(target.entry).length > 1 ? target.mode : "base", value)
          : setToken(current, key, value),
      `${key}:${target.mode}`,
    )
  }

  const preview = resolveForPreview(doc, serializeShadow(layers), target.mode)

  return (
    <>
      <div className={floating} style={{ right: "calc(20rem + 12px)" }}>
        <div className={panelHeader}>
          Edit effect style
          <IconButton label="Close" onClick={props.onClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <Preview shadow={preview} mode={target.mode} />
        <styled.div display="grid" gridTemplateColumns="5rem 1fr" alignItems="center" gap="2" px="4" py="3">
          <Muted>Name</Muted>
          <TextInput value={target.entry.name} readOnly aria-label="Name" />
          <Muted>Mode</Muted>
          <TextInput value={target.mode === "_dark" ? "Dark" : "Light"} readOnly aria-label="Mode" />
        </styled.div>
        <styled.div display="flex" alignItems="center" justifyContent="space-between" px="4" pt="1" pb="2">
          <styled.span textStyle="sm" fontWeight="semibold">
            Properties
          </styled.span>
          <IconButton
            label="Add shadow"
            onClick={() => {
              update([
                ...layers,
                { inset: false, x: 0, y: 4, blur: 8, spread: 0, color: "black", opacity: 20, visible: true },
              ])
              setSelected(layers.length)
            }}
          >
            <PlusIcon />
          </IconButton>
        </styled.div>
        <styled.div display="flex" flexDirection="column" gap="1.5" px="4" pb="4">
          {layers.length === 0 && <Muted>No shadow. Add one with +.</Muted>}
          {layers.map((layer, index) => (
            <LayerRow
              key={index}
              layer={layer}
              selected={selected === index}
              onSelect={() => setSelected(selected === index ? undefined : index)}
              onToggle={() =>
                update(layers.map((item, i) => (i === index ? { ...item, visible: !item.visible } : item)))
              }
              onRemove={() => {
                update(layers.filter((_, i) => i !== index))
                setSelected(undefined)
              }}
            />
          ))}
        </styled.div>
      </div>
      {selected !== undefined && layers[selected] && (
        <LayerEditor
          layer={layers[selected]}
          onChange={(layer) => update(layers.map((item, i) => (i === selected ? layer : item)))}
          onClose={() => setSelected(undefined)}
        />
      )}
    </>
  )
}

const checker = {
  backgroundColor: "#ffffff",
  backgroundImage:
    "linear-gradient(45deg, #f0f0f0 25%, transparent 25%), linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f0f0f0 75%), linear-gradient(-45deg, transparent 75%, #f0f0f0 75%)",
  backgroundSize: "16px 16px",
  backgroundPosition: "0 0, 0 8px, 8px -8px, -8px 0",
}

const darkChecker = {
  ...checker,
  backgroundColor: "#262626",
  backgroundImage: checker.backgroundImage.replaceAll("#f0f0f0", "#2e2e2e"),
}

function Preview(props: { shadow: string; mode: ColorMode }) {
  const dark = props.mode === "_dark"
  return (
    <styled.div
      display="grid"
      placeItems="center"
      h="44"
      borderBottomWidth="1px"
      borderColor="border.muted"
      style={dark ? darkChecker : checker}
    >
      <styled.div
        w="28"
        h="28"
        borderRadius="full"
        style={{ boxShadow: props.shadow, background: dark ? "#2e2e2e" : "#ffffff" }}
      />
    </styled.div>
  )
}

const layerRow = css({
  display: "flex",
  alignItems: "center",
  gap: "1",
  "& > button:first-child": {
    flex: "1",
    display: "flex",
    alignItems: "center",
    gap: "2",
    h: "8",
    px: "2",
    borderRadius: "md",
    borderWidth: "1px",
    borderColor: "border.muted",
    textStyle: "sm",
    cursor: "pointer",
    _hover: { bg: "bg.muted" },
  },
  "&[data-selected] > button:first-child": { bg: "blue.subtle", borderColor: "blue.muted", color: "blue.fg" },
  "&[data-hidden] > button:first-child": { color: "fg.subtle" },
})

function LayerRow(props: {
  layer: ShadowLayer
  selected: boolean
  onSelect: () => void
  onToggle: () => void
  onRemove: () => void
}) {
  const { layer } = props
  return (
    <div className={layerRow} data-selected={props.selected || undefined} data-hidden={!layer.visible || undefined}>
      <button type="button" onClick={props.onSelect}>
        <LayerIcon inset={layer.inset} />
        {layer.inset ? "Inner shadow" : "Drop shadow"}
      </button>
      <IconButton label={layer.visible ? "Hide" : "Show"} onClick={props.onToggle}>
        {layer.visible ? <EyeIcon /> : <EyeOffIcon />}
      </IconButton>
      <IconButton label="Remove" onClick={props.onRemove}>
        <MinusIcon />
      </IconButton>
    </div>
  )
}

function LayerEditor(props: { layer: ShadowLayer; onChange: (layer: ShadowLayer) => void; onClose: () => void }) {
  const { layer, onChange } = props
  const set = (patch: Partial<ShadowLayer>) => onChange({ ...layer, ...patch })
  return (
    <div className={floating} style={{ right: "calc(20rem + 12px + 19rem + 8px)" }}>
      <div className={panelHeader}>
        <NativeSelect
          aria-label="Shadow type"
          value={layer.inset ? "inner" : "drop"}
          className={css({ w: "36" })}
          onChange={(event) => set({ inset: event.target.value === "inner" })}
        >
          <option value="drop">Drop shadow</option>
          <option value="inner">Inner shadow</option>
        </NativeSelect>
        <IconButton label="Close" onClick={props.onClose}>
          <CloseIcon />
        </IconButton>
      </div>
      <styled.div display="grid" gridTemplateColumns="4.5rem 1fr 1fr" alignItems="center" gap="2" p="4">
        <Muted>Position</Muted>
        <NumberField label="X" value={layer.x} onChange={(x) => set({ x })} />
        <NumberField label="Y" value={layer.y} onChange={(y) => set({ y })} />
        <Muted>Blur</Muted>
        <NumberField label="Blur" handle="⇔" value={layer.blur} min={0} onChange={(blur) => set({ blur })} />
        <span />
        <Muted>Spread</Muted>
        <NumberField label="Spread" handle="⇔" value={layer.spread} onChange={(spread) => set({ spread })} />
        <span />
        <Muted>Color</Muted>
        <styled.div gridColumn="span 2" display="flex" gap="2" minW="0">
          <ColorTokenPicker
            label="Shadow color"
            value={layerColor({ color: layer.color, opacity: 100 })}
            references
            onChange={(value) => {
              const reference = value.match(/^\{colors\.([^/}]+)\}$/)
              set({ color: reference ? reference[1]! : value })
            }}
          >
            <ColorPill
              value={layerColor({ color: layer.color, opacity: 100 })}
              inherited={false}
              label="Shadow color"
            />
          </ColorTokenPicker>
          <NumberField
            label="%"
            value={layer.opacity}
            min={0}
            max={100}
            suffix="%"
            onChange={(opacity) => set({ opacity })}
          />
        </styled.div>
      </styled.div>
    </div>
  )
}

const numberField = css({
  display: "flex",
  alignItems: "center",
  gap: "1.5",
  minW: "0",
  "& > span": {
    flexShrink: "0",
    minW: "4",
    textStyle: "xs",
    color: "fg.muted",
    cursor: "ew-resize",
    userSelect: "none",
    touchAction: "none",
  },
})

function NumberField(props: {
  label: string
  value: number
  min?: number
  max?: number
  suffix?: string
  handle?: string
  onChange: (value: number) => void
}) {
  const [draft, setDraft] = useState(String(props.value))
  useEffect(() => setDraft(String(props.value)), [props.value])
  const clamp = (value: number) => Math.min(props.max ?? Infinity, Math.max(props.min ?? -Infinity, value))

  const scrub = (event: PointerEvent<HTMLSpanElement>) => {
    const startX = event.clientX
    const start = props.value
    const target = event.currentTarget
    target.setPointerCapture(event.pointerId)
    const move = (moveEvent: globalThis.PointerEvent) => {
      const step = moveEvent.shiftKey ? 10 : 1
      props.onChange(clamp(Math.round(start + ((moveEvent.clientX - startX) / 2) * step)))
    }
    const up = () => {
      target.removeEventListener("pointermove", move)
      target.removeEventListener("pointerup", up)
    }
    target.addEventListener("pointermove", move)
    target.addEventListener("pointerup", up)
  }

  return (
    <label className={cx(numberField)}>
      <span onPointerDown={scrub}>{props.handle ?? (props.suffix ? "" : props.label)}</span>
      <TextInput
        aria-label={props.label}
        inputMode="decimal"
        value={draft}
        onChange={(event) => {
          setDraft(event.target.value)
          const parsed = Number.parseFloat(event.target.value)
          if (!Number.isNaN(parsed)) props.onChange(clamp(parsed))
        }}
        onKeyDown={(event) => {
          if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return
          event.preventDefault()
          const step = (event.shiftKey ? 10 : 1) * (event.key === "ArrowUp" ? 1 : -1)
          props.onChange(clamp(props.value + step))
        }}
      />
      {props.suffix && <span>{props.suffix}</span>}
    </label>
  )
}

function LayerIcon(props: { inset: boolean }) {
  return (
    <styled.span
      flexShrink="0"
      w="3.5"
      h="3.5"
      borderRadius="xs"
      borderWidth="1.5px"
      borderColor="currentColor"
      style={{ boxShadow: props.inset ? "inset 0 2px 0 currentColor" : "0 2px 0 currentColor" }}
    />
  )
}

function CloseIcon() {
  return (
    <Icon>
      <path d="M18 6 6 18M6 6l12 12" />
    </Icon>
  )
}

function PlusIcon() {
  return (
    <Icon>
      <path d="M12 5v14M5 12h14" />
    </Icon>
  )
}

function MinusIcon() {
  return (
    <Icon>
      <path d="M5 12h14" />
    </Icon>
  )
}

function EyeIcon() {
  return (
    <Icon>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </Icon>
  )
}

function EyeOffIcon() {
  return (
    <Icon>
      <path d="M3 3l18 18M10.6 5.1A10.9 10.9 0 0 1 12 5c6.5 0 10 7 10 7a17.6 17.6 0 0 1-3.2 4.1M6.6 6.6A17.4 17.4 0 0 0 2 12s3.5 7 10 7a10.7 10.7 0 0 0 5.4-1.4" />
      <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
    </Icon>
  )
}
