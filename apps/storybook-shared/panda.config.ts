import { concentricPreset } from "@isbatak/panda-concentric"
import { masonryPreset } from "@isbatak/panda-masonry"
import { swipeableListPreset } from "@isbatak/panda-swipeable-list"
import { textFlipPreset } from "@isbatak/panda-text-flip"
import { wheelPickerPreset } from "@isbatak/panda-wheel-picker"
import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  designSystem: "@isbatak/panda-ds",
  presets: [concentricPreset, masonryPreset, swipeableListPreset, textFlipPreset, wheelPickerPreset],
  preflight: true,
  include: ["../storybook-*/src/**/*.{ts,tsx,vue,svelte}"],
  outdir: "styled-system",
  forceImportExtension: true,
})
