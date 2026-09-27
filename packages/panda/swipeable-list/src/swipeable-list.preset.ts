import { definePreset } from "@pandacss/dev"
import type { Preset } from "@pandacss/types"
import { swipeableListGlobalVars, swipeableListRecipe } from "./swipeable-list.recipe"

export const swipeableListPreset: Preset = definePreset({
  name: "@isbatak/panda-swipeable-list",
  globalVars: {
    extend: swipeableListGlobalVars,
  },
  theme: {
    extend: {
      slotRecipes: {
        swipeableList: swipeableListRecipe,
      },
    },
  },
})
