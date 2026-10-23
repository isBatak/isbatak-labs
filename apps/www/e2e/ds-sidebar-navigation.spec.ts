import { instant } from "@next/playwright"
import { expect, test } from "@playwright/test"

test("DS sidebar link prefetches the full component page", async ({ page }) => {
  await page.goto("/ds/components/accordion")
  const link = page.getByRole("navigation", { name: "Components" }).locator('a[href="/ds/components/badge"]')
  await expect(link).toBeVisible()
  const main = page.getByRole("main")

  await instant(page, async () => {
    await link.click()
    await page.waitForURL((url) => url.pathname === "/ds/components/badge" && url.search === "")

    await expect(page.getByRole("navigation", { name: "Components" })).toBeVisible()
    await expect(main.getByRole("heading", { level: 1, name: "Badge" })).toBeVisible()
    await expect(main.getByText("A short label for status, counts or categories.")).toBeVisible()
    await expect(main.getByRole("button", { name: "Code", exact: true })).toBeVisible()
    await expect(main.getByRole("button", { name: "Copy code" })).toHaveCount(2)
  })

  await expect(main.getByRole("heading", { name: "Usage" })).toBeVisible()
})
