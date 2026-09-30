import { defineConfig } from "tsup"

export default defineConfig([
  {
    dts: true,
    entry: {
      index: "src/index.ts",
      next: "src/adapters/next.ts",
      webpack: "src/adapters/webpack.ts",
      turbopack: "src/adapters/turbopack.ts",
      vite: "src/adapters/vite.ts",
    },
    target: "node20",
    format: ["esm", "cjs"],
    shims: true,
  },
  {
    dts: true,
    entry: { client: "src/client/index.ts" },
    target: "es2020",
    format: ["esm"],
    platform: "browser",
  },
  {
    entry: { loader: "src/loader/index.ts" },
    target: "node20",
    format: ["cjs"],
  },
])
