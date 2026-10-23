import { defineConfig, devices } from "@playwright/test"

const port = 3100
const baseURL = process.env.BASE_URL ?? `http://localhost:${port}`

export default defineConfig({
  testDir: "./e2e",
  workers: 1,
  use: { baseURL, viewport: { width: 1440, height: 900 } },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"], viewport: { width: 1440, height: 900 } } }],
  webServer: process.env.BASE_URL
    ? undefined
    : { command: `pnpm start --port ${port}`, url: baseURL, reuseExistingServer: false },
})
