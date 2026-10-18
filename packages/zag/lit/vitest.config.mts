import { defineConfig } from "vitest/config"

export default defineConfig({
  resolve: {
    conditions: ["browser", "development"],
  },
  test: {
    globals: true,
    environment: "jsdom",
    server: {
      deps: {
        inline: [/lit/],
      },
    },
  },
})
