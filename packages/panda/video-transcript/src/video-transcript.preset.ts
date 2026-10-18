import { definePreset } from "@pandacss/dev"
import type { Preset } from "@pandacss/types"
import { videoTranscriptRecipe } from "./video-transcript.recipe"

export const videoTranscriptPreset: Preset = definePreset({
  name: "@isbatak/panda-video-transcript",
  theme: {
    extend: {
      slotRecipes: {
        videoTranscript: videoTranscriptRecipe,
      },
    },
  },
})
