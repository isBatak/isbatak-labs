import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  designSystem: "@isbatak/panda-ds",
  jsxFramework: "vue",
  include: ["./src/**/*.{ts,vue}"],
  outdir: "styled-system",
})
