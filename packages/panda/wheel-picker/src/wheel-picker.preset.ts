import { definePreset } from "@pandacss/dev"
import type { Preset } from "@pandacss/types"
import { wheelPickerRecipe } from "./wheel-picker.recipe"

export const wheelPickerPreset: Preset = definePreset({
  name: "@isbatak/panda-wheel-picker",
  theme: {
    extend: {
      slotRecipes: {
        wheelPicker: wheelPickerRecipe,
      },
    },
  },
})
