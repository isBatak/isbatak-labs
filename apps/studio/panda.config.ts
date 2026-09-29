import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  designSystem: "@isbatak/panda-ds",
  preflight: true,
  jsxFramework: "react",
  include: ["./src/**/*.{ts,tsx}", "../../packages/ui/react/src/**/*.{ts,tsx}"],
  outdir: "styled-system",
  // The matrix view renders every variant combination at runtime, so the extractor can't see them statically.
  staticCss: {
    recipes: "*",
  },
})
