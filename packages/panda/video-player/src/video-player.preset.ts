import { definePreset } from "@pandacss/dev"
import type { Preset } from "@pandacss/types"
import { videoPlayerRecipe } from "./video-player.recipe"

export const videoPlayerPreset: Preset = definePreset({
  name: "@isbatak/panda-video-player",
  theme: {
    extend: {
      slotRecipes: {
        videoPlayer: videoPlayerRecipe,
      },
    },
  },
})
