import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/index.ts", "src/colors.ts", "src/radius.ts"],
  outDir: "dist/theme",
  clean: true,
  format: ["esm"],
  target: "es2020",
  dts: true,
  external: ["@pandacss/dev", "@isbatak/panda-ds", "@isbatak/panda-grain-preset"],
})
