import { definePreset } from "@pandacss/dev"
import type { Preset } from "@pandacss/types"
import { textFlipKeyframes, textFlipRecipe } from "./text-flip.recipe"

export const textFlipPreset: Preset = definePreset({
  name: "@isbatak/panda-text-flip",
  theme: {
    extend: {
      keyframes: textFlipKeyframes,
      slotRecipes: {
        textFlip: textFlipRecipe,
      },
    },
  },
})
