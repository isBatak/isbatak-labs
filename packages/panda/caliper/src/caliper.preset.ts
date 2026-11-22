import { definePreset } from "@pandacss/dev"
import type { Preset } from "@pandacss/types"
import { caliperKeyframes, caliperMotionVars } from "./caliper.motion"
import { caliperRecipe } from "./caliper.recipe"

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
