import { defineConfig } from "tsup"

export default defineConfig({
  clean: true,
  dts: true,
  entry: ["src/index.ts", "src/caliper.anatomy.ts"],
  target: "es2020",
  format: ["esm", "cjs"],
})
