import { masonryPreset } from "@isbatak/panda-masonry"
import { wheelPickerPreset } from "@isbatak/panda-wheel-picker"
import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  designSystem: "@isbatak/panda-ds",
  presets: [masonryPreset, wheelPickerPreset],
  include: ["./src/examples/**/*.{ts,tsx,vue,svelte}"],
  outdir: "styled-system",
  optimize: {
    removeUnusedTokens: true,
    removeUnusedKeyframes: true,
  },
})
