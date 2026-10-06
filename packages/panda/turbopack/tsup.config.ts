import { defineConfig } from "tsup"

export default defineConfig([
  {
    dts: true,
    entry: {
      index: "src/index.ts",
      next: "src/next.ts",
    },
    target: "node20",
    format: ["esm", "cjs"],
    shims: true,
  },
  {
    entry: { loader: "src/loader.ts" },
    target: "node20",
    format: ["cjs"],
  },
])
