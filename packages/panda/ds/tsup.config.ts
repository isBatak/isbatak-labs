import { esbuildPluginFilePathExtensions } from "esbuild-plugin-file-path-extensions"
import { defineConfig } from "tsup"

export default defineConfig([
  {
    entry: ["src/theme/index.ts", "src/theme/radius.ts"],
    outDir: "dist/theme",
    format: ["esm"],
    target: "es2020",
    dts: true,
    external: ["@pandacss/dev", "@isbatak/panda-wheel-picker"],
  },
  {
    entry: ["src/components/**/*.ts", "src/components/**/*.tsx"],
    outDir: "dist/components",
    clean: true,
    format: ["esm"],
    target: "es2020",
    dts: true,
    bundle: true,
    external: [/^@isbatak\/panda-ds\//],
    esbuildPlugins: [esbuildPluginFilePathExtensions({ esmExtension: "js" })],
    esbuildOptions(options) {
      options.jsx = "automatic"
    },
  },
])
