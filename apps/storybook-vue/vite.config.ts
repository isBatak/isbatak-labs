import vue from "@vitejs/plugin-vue"
import { fileURLToPath } from "node:url"
import { defineConfig } from "vite"

export default defineConfig({
  resolve: {
    alias: { "styled-system": fileURLToPath(new URL("../compositions/styled-system", import.meta.url)) },
  },
  plugins: [vue()],
})
