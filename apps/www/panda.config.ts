import { masonryPreset } from "@isbatak/panda-masonry"
import { textFlipPreset } from "@isbatak/panda-text-flip"
import { wheelPickerPreset } from "@isbatak/panda-wheel-picker"
import { defineConfig } from "@pandacss/dev"

import { theme } from "./theme"
import { globalCss } from "./theme/global-css"

export default defineConfig({
  designSystem: "@isbatak/panda-ds",
  presets: [masonryPreset, textFlipPreset, wheelPickerPreset],
  preflight: true,
  jsxFramework: "react",
  include: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "../compositions/src/examples/**/*.{ts,tsx,vue,svelte}",
    "../../packages/ui/react/src/**/*.{ts,tsx}",
  ],
  exclude: [],
  dependencies: ["./theme/**/*.ts"],
  outdir: "styled-system",
  staticCss: {
    recipes: {
      drawer: ["*"],
      masonry: ["*"],
      wheelPicker: ["*"],
    },
  },
  globalCss: {
    extend: globalCss,
  },
  theme,
  optimize: {
    removeUnusedTokens: true,
    removeUnusedKeyframes: true,
    smartCompoundVariants: true,
    treeshakeDesignSystem: true,
  },
})
