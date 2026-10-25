import { conditions, theme as dsTheme, patterns, utilities } from "@isbatak/panda-ds/theme"
import { definePreset, defineThemeVariant } from "@pandacss/dev"

import { gray, red } from "./colors"
import { globalCss } from "./global-css"
import { layerStyles } from "./layer-styles"
import { recipes, slotRecipes } from "./recipes"
import { assets } from "./semantic-tokens/assets"
import { colors as semanticColors } from "./semantic-tokens/colors"
import { shadows } from "./semantic-tokens/shadows"
import { type ColorOptions, createColors, tokenAdditions } from "./tokens"

export type AnalogOptions = Partial<ColorOptions>

export const createAnalogTheme = ({ neutral = gray, accent = red }: AnalogOptions = {}) =>
  defineThemeVariant({
    ...dsTheme,
    tokens: { ...dsTheme.tokens, colors: createColors({ neutral, accent }) },
    semanticTokens: { ...dsTheme.semanticTokens, colors: semanticColors },
    recipes,
    slotRecipes,
    extend: {
      ...dsTheme.extend,
      tokens: tokenAdditions,
      semanticTokens: { assets, shadows },
      layerStyles,
    },
  })

export const analog = (options: AnalogOptions = {}) =>
  definePreset({
    name: "@isbatak/panda-theme-analog",
    conditions,
    utilities: { extend: utilities },
    patterns: { extend: patterns },
    globalCss,
    theme: createAnalogTheme(options),
  })

export const theme = createAnalogTheme()

export { conditions, patterns, utilities }
export { globalCss }
export { grainDark, grainLight } from "./grain"
