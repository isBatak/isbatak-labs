import { definePreset } from "@pandacss/dev"
import type { Preset } from "@pandacss/types"
import { videoPlayerKeyframes, videoPlayerRecipe } from "./video-player.recipe"

export const videoPlayerPreset: Preset = definePreset({
  name: "@isbatak/panda-video-player",
  theme: {
    extend: {
      keyframes: videoPlayerKeyframes,
      slotRecipes: {
        videoPlayer: videoPlayerRecipe,
      },
    },
  },
})
