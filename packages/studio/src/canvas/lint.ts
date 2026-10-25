import type { LintResult } from "../lib/messages"
import { colorPalettes, cssVarName } from "../lib/theme-meta"

/**
 * WCAG contrast checks for the semantic color pairs components rely on, measured on the live canvas so they
 * reflect every override.
 */

const pairs: Array<[foreground: string, background: string]> = [
  ["fg", "bg"],
  ["fg.muted", "bg"],
  ["fg.subtle", "bg"],
  ["fg", "bg.subtle"],
  ["fg", "bg.muted"],
  ["fg.error", "bg"],
  ["fg.error", "bg.error"],
  ["fg.success", "bg.success"],
  ["fg.warning", "bg.warning"],
  ["fg.info", "bg.info"],
]

const canvas = document.createElement("canvas")
canvas.width = canvas.height = 1
const context = canvas.getContext("2d", { willReadFrequently: true })

function toRgb(color: string): [number, number, number] {
  if (!context) return [0, 0, 0]
  context.clearRect(0, 0, 1, 1)
  context.fillStyle = "#fff"
  context.fillRect(0, 0, 1, 1)
  context.fillStyle = color
  context.fillRect(0, 0, 1, 1)
  const [r, g, b] = context.getImageData(0, 0, 1, 1).data
  return [r!, g!, b!]
}

function luminance([r, g, b]: [number, number, number]) {
  const channel = (value: number) => {
    const c = value / 255
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
  }
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b)
}

export function contrastRatio(a: string, b: string) {
  const [l1, l2] = [luminance(toRgb(a)), luminance(toRgb(b))].sort((x, y) => y - x)
  return (l1! + 0.05) / (l2! + 0.05)
}

function resolveColor(token: string) {
  const probe = document.createElement("span")
  probe.style.color = `var(${cssVarName("colors", token.split("."))})`
  document.body.append(probe)
  const color = getComputedStyle(probe).color
  probe.remove()
  return color
}

export function runLint(): LintResult[] {
  const all = [
    ...pairs,
    ...colorPalettes.flatMap((palette): Array<[string, string]> => [
      [`${palette}.contrast`, `${palette}.solid`],
      [`${palette}.fg`, `${palette}.subtle`],
    ]),
  ]
  return all.map(([foreground, background]) => {
    const fg = resolveColor(foreground)
    const bg = resolveColor(background)
    return {
      id: `${foreground}/${background}`,
      label: `${foreground} on ${background}`,
      foreground: fg,
      background: bg,
      ratio: Math.round(contrastRatio(fg, bg) * 100) / 100,
    }
  })
}
