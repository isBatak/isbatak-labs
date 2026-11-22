import { definePreset } from "@pandacss/dev"
import type { Preset } from "@pandacss/types"
import { caliperKeyframes, caliperMotionVars } from "./caliper.motion"
import { caliperRecipe } from "./caliper.recipe"

/** Adds the `caliper` slot recipe. Needs `bg`, `fg`, `border` and `colorPalette` semantic tokens, as in panda-ds. */
export const caliperPreset: Preset = definePreset({
  name: "@isbatak/panda-caliper",
  globalVars: {
    extend: caliperMotionVars,
  },
  theme: {
    extend: {
      keyframes: caliperKeyframes,
      slotRecipes: {
        caliper: caliperRecipe,
      },
    },
  },
})
