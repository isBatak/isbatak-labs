import { definePreset } from "@pandacss/dev"
import type { Preset } from "@pandacss/types"
import { wheelPickerRecipe } from "./wheel-picker.recipe"

export const wheelPickerPreset: Preset = definePreset({
  name: "@isbatak/panda-wheel-picker",
  theme: {
    extend: {
      keyframes: {
        wheelPickerTilt: {
          "0%": { transform: "rotateX(-60deg)", opacity: "0.4" },
          "50%": { transform: "none", opacity: "1" },
          "100%": { transform: "rotateX(60deg)", opacity: "0.4" },
        },
      },
      slotRecipes: {
        wheelPicker: wheelPickerRecipe,
      },
    },
  },
})
