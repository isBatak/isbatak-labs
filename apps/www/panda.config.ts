import { codePreviewPreset } from "@isbatak/panda-code-preview"
import { concentricPreset } from "@isbatak/panda-concentric"
import { masonryPreset } from "@isbatak/panda-masonry"
import { textFlipPreset } from "@isbatak/panda-text-flip"
import { wheelPickerPreset } from "@isbatak/panda-wheel-picker"
import { defineConfig } from "@pandacss/dev"

import { theme } from "./theme"
import { globalCss } from "./theme/global-css"
import { utilities } from "./theme/utilities"

export default defineConfig({
  designSystem: "@isbatak/panda-ds",
  presets: [concentricPreset, codePreviewPreset, masonryPreset, textFlipPreset, wheelPickerPreset],
  preflight: true,
  cssVarRoot: ":where(:root, :host, .light)",
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
  utilities: {
    extend: utilities,
  },
  theme,
  optimize: {
    removeUnusedTokens: true,
    removeUnusedKeyframes: true,
    smartCompoundVariants: true,
    treeshakeDesignSystem: true,
  },
})
