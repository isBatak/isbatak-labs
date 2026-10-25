import { defineTokens } from "@pandacss/dev"

import type { AccentPalette, NeutralPalette } from "../colors"

const alphaSteps = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"] as const
const alphas = [0.04, 0.06, 0.08, 0.16, 0.24, 0.36, 0.48, 0.64, 0.8, 0.92, 0.95]

const alpha = (rgb: string) =>
  Object.fromEntries(alphaSteps.map((step, index) => [step, { value: `rgba(${rgb}, ${alphas[index]})` }]))

export interface ColorOptions {
  neutral: NeutralPalette
  accent: AccentPalette
}

export const createColors = ({ neutral, accent }: ColorOptions) =>
  defineTokens.colors({
    transparent: { value: "transparent" },
    current: { value: "currentColor" },
    black: { value: "#0d0d0d" },
    white: { value: "#f6f5f2" },
    whiteAlpha: alpha("246, 245, 242"),
    blackAlpha: alpha("13, 13, 13"),
    neutral,
    accent,
  })
