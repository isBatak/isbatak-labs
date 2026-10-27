import { concentricPreset } from "@isbatak/panda-concentric-preset"
import { masonryPreset } from "@isbatak/panda-masonry"
import { textFlipPreset } from "@isbatak/panda-text-flip"
import { wheelPickerPreset } from "@isbatak/panda-wheel-picker"
import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  designSystem: "@isbatak/panda-ds",
  presets: [concentricPreset, masonryPreset, textFlipPreset, wheelPickerPreset],
  include: ["./src/examples/**/*.{ts,tsx,vue,svelte}"],
  outdir: "styled-system",
  optimize: {
    removeUnusedTokens: true,
    removeUnusedKeyframes: true,
  },
})
