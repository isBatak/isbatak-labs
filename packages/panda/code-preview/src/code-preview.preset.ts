import { definePreset } from "@pandacss/dev"
import type { Preset } from "@pandacss/types"
import { codePreviewRecipe } from "./code-preview.recipe"

export const codePreviewPreset: Preset = definePreset({
  name: "@isbatak/panda-code-preview",
  theme: {
    extend: {
      slotRecipes: {
        codePreview: codePreviewRecipe,
      },
    },
  },
})
