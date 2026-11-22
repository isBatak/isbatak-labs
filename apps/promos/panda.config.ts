import { caliperPreset } from "@isbatak/panda-caliper"
import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  designSystem: "@isbatak/panda-ds",
  presets: [caliperPreset],
  preflight: true,
  jsxFramework: "react",
  include: [
    "./src/**/*.{ts,tsx}",
    "../../packages/ui/react/src/components/{button,badge,group,heading,icon,input-group,kbd,loader,password-input,search-input,segment-group,select,spinner}/**/*.tsx",
  ],
  exclude: [],
  outdir: "styled-system",
  globalCss: {
    extend: {
      ":root": {
        "--caliper-stroke": "2px",
      },
      "*, *::before, *::after": {
        transition: "none !important",
      },
      ":not([data-enter], [data-exit]), ::before, ::after": {
        animation: "none !important",
      },
    },
  },
  theme: {
    extend: {
      tokens: {
        fonts: {
          body: { value: "Inter, ui-sans-serif, system-ui, sans-serif" },
          heading: { value: "Inter, ui-sans-serif, system-ui, sans-serif" },
          mono: {
            value: '"JetBrains Mono", ui-monospace, SFMono-Regular, monospace',
          },
        },
      },
      slotRecipes: {
        caliper: {
          base: {
            dimensionLabel: { h: "9", px: "3.5", textStyle: "xl" },
            calloutLabel: { textStyle: "lg" },
          },
        },
      },
    },
  },
})
