import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  designSystem: "@isbatak/panda-ds",
  preflight: true,
  jsxFramework: "react",
  include: [
    "./src/**/*.{ts,tsx}",
    "../../packages/ui/react/src/components/{button,badge,group,loader,spinner}/**/*.tsx",
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
