import { defineLayerStyles, definePreset, defineSemanticTokens, defineTokens } from "@pandacss/dev"
import type { Preset } from "@pandacss/types"

import { createGrain, type GrainStrength } from "./grain"

export interface GrainOptions {
  size?: number
  frequency?: number
  light?: GrainStrength
  dark?: GrainStrength
}

export const grainDefaults = {
  size: 192,
  frequency: 0.8,
  light: { white: 2, black: 0.24 },
  dark: { white: 0.24, black: 1.12 },
} satisfies Required<GrainOptions>

export const grainTheme = ({
  size = grainDefaults.size,
  frequency = grainDefaults.frequency,
  light = grainDefaults.light,
  dark = grainDefaults.dark,
}: GrainOptions = {}) => ({
  tokens: defineTokens({
    sizes: {
      grain: { value: `${size}px` },
    },
  }),
  semanticTokens: defineSemanticTokens({
    assets: {
      grain: {
        value: {
          base: `url("${createGrain({ size, frequency, ...light })}")`,
          _dark: `url("${createGrain({ size, frequency, ...dark })}")`,
        },
      },
    },
  }),
  layerStyles: defineLayerStyles({
    grain: {
      value: {
        backgroundImage: "{assets.grain}",
        backgroundRepeat: "repeat",
        backgroundSize: "{sizes.grain}",
      },
    },
  }),
})

export const grainPreset = (options: GrainOptions = {}): Preset =>
  definePreset({
    name: "@isbatak/panda-grain-preset",
    theme: {
      extend: grainTheme(options),
    },
  })
