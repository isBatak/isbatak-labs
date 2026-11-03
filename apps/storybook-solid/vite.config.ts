import { fileURLToPath } from "node:url"
import { defineConfig } from "vite"
import solid from "vite-plugin-solid"

export default defineConfig({
  resolve: {
    alias: { "styled-system": fileURLToPath(new URL("../compositions/styled-system", import.meta.url)) },
  },
  plugins: [solid()],
})
