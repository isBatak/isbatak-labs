import { definePreset } from "@pandacss/dev"
import type { Preset } from "@pandacss/types"
import { masonryRecipe } from "./masonry.recipe"

export const masonryPreset: Preset = definePreset({
  name: "@isbatak/panda-masonry",
  theme: {
    extend: {
      slotRecipes: {
        masonry: masonryRecipe,
      },
    },
  },
})
