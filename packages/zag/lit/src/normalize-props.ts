import type { PropTypes } from "@zag-js/types"
import { createNormalizer } from "@zag-js/types"
import type { Attrs } from "./spread-props"

const propMap: Record<string, string> = {
  className: "class",
  defaultChecked: "checked",
  defaultValue: "value",
  htmlFor: "for",
  onBlur: "onfocusout",
  onChange: "oninput",
  onDoubleClick: "ondblclick",
  onFocus: "onfocusin",
}

const caseSensitive = new Set(["preserveAspectRatio", "viewBox"])

const svgNames: Record<string, string> = {
  clipPath: "clip-path",
  clipRule: "clip-rule",
  fillRule: "fill-rule",
  strokeDasharray: "stroke-dasharray",
  strokeDashoffset: "stroke-dashoffset",
  strokeLinecap: "stroke-linecap",
  strokeLinejoin: "stroke-linejoin",
  strokeMiterlimit: "stroke-miterlimit",
  strokeWidth: "stroke-width",
}

export function toStyleString(style: Record<string, unknown>): string {
  let result = ""
  for (const [key, value] of Object.entries(style)) {
    if (typeof value !== "string" && typeof value !== "number") continue
    const name = key.startsWith("--") ? key : key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
    result += `${name}:${String(value)};`
  }
  return result
}

export const normalizeProps = createNormalizer<PropTypes<Attrs>>((props) => {
  const normalized: Attrs = {}
  for (const [key, value] of Object.entries(props)) {
    if (value === undefined) continue
    const name = propMap[key] ?? svgNames[key] ?? (caseSensitive.has(key) ? key : key.toLowerCase())
    normalized[name] = value
  }
  return normalized
})
