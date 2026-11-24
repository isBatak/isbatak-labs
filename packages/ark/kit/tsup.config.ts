import { defineConfig } from "tsup"

export default defineConfig({
  clean: true,
  dts: true,
  entry: { "react/index": "src/react/index.ts" },
  target: "es2020",
  format: ["esm", "cjs"],
  external: ["react", "@ark-ui/react", "@zag-js/react"],
})
