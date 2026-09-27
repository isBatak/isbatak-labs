import { definePreset } from "@pandacss/dev"
import type { Preset } from "@pandacss/types"
import { swipeableListRecipe } from "./swipeable-list.recipe"

export const swipeableListPreset: Preset = definePreset({
  name: "@isbatak/panda-swipeable-list",
  theme: {
    extend: {
      slotRecipes: {
        swipeableList: swipeableListRecipe,
      },
    },
  },
})
