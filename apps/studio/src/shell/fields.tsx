import { useEffect, useState } from "react"
import { css } from "styled-system/css"
import { styled } from "styled-system/jsx"

import { listTokens, resolveReferences } from "../lib/theme-meta"
import { IconButton, ResetIcon, TextInput, dot } from "./ui"

/** `<datalist>`s with token suggestions, rendered once and referenced by id from inputs */
export function TokenDatalists() {
  return (
    <>
      <TokenDatalist category="colors" />
      <TokenDatalist category="spacing" />
      <TokenDatalist category="sizes" />
      <TokenDatalist category="radii" />
      <TokenDatalist category="shadows" />
      <TokenDatalist category="fonts" />
      <TokenDatalist category="fontSizes" />
      <TokenDatalist category="fontWeights" />
      <TokenDatalist category="lineHeights" />
      <TokenDatalist category="letterSpacings" />
      <TokenDatalist category="borders" />
    </>
  )
}

function TokenDatalist(props: { category: string }) {
  const { category } = props
  return (
    <>
      <datalist id={`names-${category}`}>
        {listTokens(category).map((entry) => (
          <option key={`${entry.name}-${entry.semantic}`} value={entry.name} />
        ))}
      </datalist>
      <datalist id={`refs-${category}`}>
        {listTokens(category, { semantic: false }).map((entry) => (
          <option key={entry.name} value={`{${category}.${entry.name}}`} />
        ))}
      </datalist>
    </>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Colors
 * -----------------------------------------------------------------------------------------------*/

let probeCanvas: CanvasRenderingContext2D | null | undefined

/** Resolves any CSS color (including `var(...)` and `color-mix`) to `#rrggbb` using the studio's own tokens */
export function toHex(value: string) {
  if (!value) return "#000000"
  const probe = document.createElement("span")
  probe.style.color = resolveReferences(value)
  document.body.append(probe)
  const color = getComputedStyle(probe).color
  probe.remove()
  probeCanvas ??= document.createElement("canvas").getContext("2d", { willReadFrequently: true })
  if (!probeCanvas) return "#000000"
  probeCanvas.clearRect(0, 0, 1, 1)
  probeCanvas.fillStyle = color
  probeCanvas.fillRect(0, 0, 1, 1)
  const [r, g, b] = probeCanvas.getImageData(0, 0, 1, 1).data
  return `#${[r, g, b].map((channel) => channel!.toString(16).padStart(2, "0")).join("")}`
}

const swatch = css({
  position: "relative",
  w: "6",
  h: "6",
  flexShrink: "0",
  borderRadius: "sm",
  borderWidth: "1px",
  borderColor: "border",
  overflow: "hidden",
  cursor: "pointer",
  "& input": { position: "absolute", inset: "0", opacity: "0", cursor: "pointer" },
})

export function ColorSwatchPicker(props: { value: string; onChange: (value: string) => void; label: string }) {
  const [hex, setHex] = useState("#000000")
  useEffect(() => setHex(toHex(props.value)), [props.value])
  return (
    <label className={swatch} style={{ background: resolveReferences(props.value) }} title={props.label}>
      <input
        type="color"
        aria-label={props.label}
        value={hex}
        onChange={(event) => {
          setHex(event.target.value)
          props.onChange(event.target.value)
        }}
      />
    </label>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Field
 * -----------------------------------------------------------------------------------------------*/

export interface FieldProps {
  label: string
  /** Current override, if any */
  value: string | undefined
  /** Value inherited from the theme, shown as placeholder */
  inherited: string | undefined
  /** Where the inherited value comes from, when it isn't the current scope */
  hint?: string | undefined
  /** Token category for suggestions */
  category?: string | undefined
  /** Suggest `{category.name}` references (semantic tokens) instead of bare names (recipes) */
  references?: boolean
  onChange: (value: string | undefined) => void
  color?: boolean
}

export function Field(props: FieldProps) {
  const overridden = props.value !== undefined
  const effective = props.value ?? props.inherited ?? ""
  const listId = props.category ? `${props.references ? "refs" : "names"}-${props.category}` : undefined

  return (
    <styled.div display="grid" gridTemplateColumns="6.5rem 1fr" alignItems="center" gap="2">
      <styled.span
        display="flex"
        alignItems="center"
        gap="1.5"
        textStyle="xs"
        color="fg.muted"
        truncate
        title={props.label}
      >
        {props.label}
        {overridden && <span className={dot} />}
      </styled.span>
      <styled.div display="flex" alignItems="center" gap="1">
        {props.color && (
          <ColorSwatchPicker
            label={`${props.label} color`}
            value={colorPreview(effective, props.category)}
            onChange={(value) => props.onChange(value)}
          />
        )}
        <TextInput
          aria-label={props.label}
          list={listId}
          value={props.value ?? ""}
          placeholder={props.inherited ?? "not set"}
          onChange={(event) => props.onChange(event.target.value || undefined)}
        />
        {overridden ? (
          <IconButton label={`Reset ${props.label}`} onClick={() => props.onChange(undefined)}>
            <ResetIcon />
          </IconButton>
        ) : (
          <styled.span w="7" flexShrink="0" />
        )}
      </styled.div>
      {props.hint && !overridden && (
        <styled.span gridColumn="2" textStyle="2xs" color="fg.subtle" mt="-1">
          {props.hint}
        </styled.span>
      )}
    </styled.div>
  )
}

/** Turns a recipe color value (`colorPalette.solid`, `gray.500/20`) into something the swatch can paint */
function colorPreview(value: string, category: string | undefined) {
  if (!value || category !== "colors" || value.startsWith("{") || value.startsWith("#") || value.includes("(")) {
    return value
  }
  const [name, opacity] = value.split("/")
  // colorPalette.* is only defined inside components; preview it with the default gray palette
  const token = name!.replace(/^colorPalette\./, "gray.")
  return opacity ? `{colors.${token}/${opacity}}` : `{colors.${token}}`
}
