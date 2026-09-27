import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/theme/index.ts", "src/theme/radius.ts"],
  outDir: "dist/theme",
  clean: true,
  format: ["esm"],
  target: "es2020",
  dts: true,
  external: ["@pandacss/dev", "@isbatak/panda-swipeable-list", "@isbatak/panda-wheel-picker"],
})
