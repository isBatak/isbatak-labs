import { caliperPreset } from "@isbatak/panda-caliper"
import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  designSystem: "@isbatak/panda-ds",
  presets: [caliperPreset],
  preflight: true,
  jsxFramework: "react",
  include: [
    "./src/**/*.{ts,tsx}",
    "../../packages/ui/react/src/components/{button,badge,group,icon,input-group,loader,password-input,search-input,segment-group,select,spinner}/**/*.tsx",
  ],
  exclude: [],
  outdir: "styled-system",
  globalCss: {
    extend: {
      "*, *::before, *::after": {
        transition: "none !important",
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
          mono: { value: '"JetBrains Mono", ui-monospace, SFMono-Regular, monospace' },
        },
      },
    },
  },
})
