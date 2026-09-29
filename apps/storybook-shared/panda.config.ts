import { swipeableListPreset } from "@isbatak/panda-swipeable-list"
import { wheelPickerPreset } from "@isbatak/panda-wheel-picker"
import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  designSystem: "@isbatak/panda-ds",
  presets: [swipeableListPreset, wheelPickerPreset],
  preflight: true,
  include: ["../storybook-*/src/**/*.{ts,tsx,vue,svelte}"],
  outdir: "styled-system",
  forceImportExtension: true,
})
