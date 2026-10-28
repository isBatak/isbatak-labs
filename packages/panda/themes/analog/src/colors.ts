export interface ColorToken {
  value: string
}

export const neutralSteps = [
  "25",
  "50",
  "75",
  "100",
  "150",
  "200",
  "250",
  "300",
  "400",
  "500",
  "600",
  "700",
  "750",
  "800",
  "850",
  "875",
  "900",
  "925",
  "950",
] as const

export const accentSteps = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"] as const

export type NeutralPalette = Record<(typeof neutralSteps)[number], ColorToken>

export type AccentPalette = Record<(typeof accentSteps)[number], ColorToken>

const neutralLightness = [
  0.985, 0.97, 0.955, 0.928, 0.894, 0.872, 0.829, 0.753, 0.695, 0.609, 0.534, 0.36, 0.329, 0.301, 0.285, 0.269, 0.252,
  0.222, 0.191,
]
const neutralTint = [0.33, 0.47, 0.62, 0.63, 0.78, 0.79, 0.95, 0.98, 1, 0.86, 0.72, 1, 1, 1, 1, 1, 1, 1, 1]
const darkFrom = neutralSteps.indexOf("700")

const accentLightness = [0.97, 0.935, 0.88, 0.8, 0.72, 0.655, 0.58, 0.5, 0.42, 0.34, 0.27]
const accentChroma = [0.12, 0.25, 0.5, 0.75, 0.92, 1, 0.95, 0.85, 0.7, 0.55, 0.45]

const oklch = (lightness: number, chroma: number, hue: number) => `oklch(${lightness} ${chroma.toFixed(4)} ${hue})`

export function neutralPalette(hue: number, chroma: number, darkChroma = 0): NeutralPalette {
  return Object.fromEntries(
    neutralSteps.map((step, index) => [
      step,
      { value: oklch(neutralLightness[index]!, (index < darkFrom ? chroma : darkChroma) * neutralTint[index]!, hue) },
    ]),
  ) as NeutralPalette
}

export function accentPalette(hue: number, chroma: number): AccentPalette {
  return Object.fromEntries(
    accentSteps.map((step, index) => [
      step,
      { value: oklch(accentLightness[index]!, chroma * accentChroma[index]!, hue) },
    ]),
  ) as AccentPalette
}

export const gray = neutralPalette(95, 0.0087)
export const sand = neutralPalette(80, 0.022, 0.008)
export const stone = neutralPalette(60, 0.012, 0.004)
export const taupe = neutralPalette(40, 0.016, 0.006)
export const slate = neutralPalette(250, 0.02, 0.01)
export const olive = neutralPalette(120, 0.018, 0.007)
export const sage = neutralPalette(150, 0.016, 0.006)
export const mauve = neutralPalette(320, 0.016, 0.007)

export const red = accentPalette(25, 0.21)
export const orange = accentPalette(50, 0.18)
export const amber = accentPalette(70, 0.16)
export const yellow = accentPalette(90, 0.15)
export const green = accentPalette(145, 0.15)
export const teal = accentPalette(180, 0.11)
export const cyan = accentPalette(210, 0.11)
export const blue = accentPalette(245, 0.14)
export const purple = accentPalette(300, 0.14)
export const pink = accentPalette(350, 0.16)
