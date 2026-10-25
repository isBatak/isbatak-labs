import type { ColorMode, StudioDoc } from "./doc"
import { getToken } from "./theme-meta"

export interface ShadowLayer {
  inset: boolean
  x: number
  y: number
  blur: number
  spread: number
  color: string
  opacity: number
  visible: boolean
  lengths?: number
}

const splitTopLevel = (value: string, separator: RegExp) => {
  const parts: string[] = []
  let depth = 0
  let current = ""
  for (const char of value) {
    if (char === "(" || char === "{") depth++
    if (char === ")" || char === "}") depth--
    if (depth === 0 && separator.test(char)) {
      if (current.trim()) parts.push(current.trim())
      current = ""
      continue
    }
    current += char
  }
  if (current.trim()) parts.push(current.trim())
  return parts
}

const isLength = (part: string) => /^-?(\d+(\.\d+)?|\.\d+)(px)?$/.test(part)

function splitColor(color: string) {
  const reference = color.match(/^\{colors\.([^/}]+)(?:\/(\d+(?:\.\d+)?))?\}$/)
  if (reference) return { color: reference[1]!, opacity: reference[2] ? Number(reference[2]) : 100 }
  return { color, opacity: 100 }
}

export function parseShadow(value: string): ShadowLayer[] {
  if (!value || value.trim() === "none") return []
  return splitTopLevel(value, /,/).map((layer) => {
    const parts = splitTopLevel(layer, /\s/)
    const inset = parts.includes("inset")
    const rest = parts.filter((part) => part !== "inset")
    const lengths = rest.filter(isLength).map((part) => Number.parseFloat(part))
    const color = rest.filter((part) => !isLength(part)).join(" ") || "{colors.black/20}"
    const [x = 0, y = 0, blur = 0, spread = 0] = lengths
    return { inset, x, y, blur, spread, ...splitColor(color), visible: true, lengths: lengths.length }
  })
}

const length = (value: number) => (value === 0 ? "0" : `${value}px`)

export function layerColor(layer: Pick<ShadowLayer, "color" | "opacity">) {
  const isToken = !!getToken("colors", layer.color)
  if (isToken) return layer.opacity >= 100 ? `{colors.${layer.color}}` : `{colors.${layer.color}/${layer.opacity}}`
  if (layer.opacity >= 100) return layer.color
  return `color-mix(in oklab, ${layer.color} ${layer.opacity}%, transparent)`
}

export function serializeShadow(layers: ShadowLayer[]) {
  const visible = layers.filter((layer) => layer.visible)
  if (!visible.length) return "none"
  return visible
    .map((layer) => {
      const needed = layer.spread !== 0 ? 4 : layer.blur !== 0 ? 3 : 2
      const count = Math.max(needed, layer.lengths ?? 2)
      const lengths = [layer.x, layer.y, layer.blur, layer.spread].slice(0, count).map(length)
      return [layer.inset ? "inset" : "", ...lengths, layerColor(layer)].filter(Boolean).join(" ")
    })
    .join(", ")
}

export function tokenValue(doc: StudioDoc, category: string, name: string, mode: ColorMode): string {
  const key = `${category}.${name}`
  const entry = getToken(category, name)
  if (!entry) return ""
  if (!entry.semantic) return doc.tokens[key] ?? String(entry.value)
  const edited = doc.semanticTokens[key]
  if (typeof entry.value === "string") return edited?.base ?? entry.value
  return edited?.[mode] ?? entry.value[mode] ?? edited?.base ?? entry.value.base ?? ""
}

export function resolveForPreview(doc: StudioDoc, value: string, mode: ColorMode, depth = 0): string {
  if (depth > 8) return value
  return value.replace(/\{([^}]+)\}/g, (match, reference: string) => {
    const [path, opacity] = reference.split("/")
    const [category, ...rest] = path!.split(".")
    const raw = tokenValue(doc, category!, rest.join("."), mode)
    if (!raw) return match
    const resolved = resolveForPreview(doc, raw, mode, depth + 1)
    return opacity ? `color-mix(in oklab, ${resolved} ${opacity}%, transparent)` : resolved
  })
}
