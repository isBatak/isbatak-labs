import { defineConfig } from "@pandacss/dev"
import { typographyPreset } from "@pandacss/preset-typography"

import { analog } from "./src"

export default defineConfig({
  presets: [
    "@pandacss/preset-base",
    typographyPreset({
      notProse: true,
      semanticTokens: { enabled: false },
    }),
    analog(),
  ],
  preflight: true,
  jsxFramework: "react",
  include: ["./src/**/*.{ts,tsx}"],
  exclude: ["./src/**"],
  dependencies: ["./src/**/*.ts"],
  outdir: "styled-system",
  forceImportExtension: true,
})
