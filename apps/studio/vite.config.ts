import { resolve } from "node:path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

import { studioThemes } from "./vite/studio-themes.ts"

export default defineConfig({
  plugins: [react(), studioThemes({ dir: resolve(import.meta.dirname, "themes") })],
  resolve: {
    alias: {
      "styled-system": resolve(import.meta.dirname, "styled-system"),
    },
  },
  build: {
    // A local dev tool that bundles the whole design system and every component demo
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      input: {
        studio: resolve(import.meta.dirname, "index.html"),
        canvas: resolve(import.meta.dirname, "canvas.html"),
      },
    },
  },
})
