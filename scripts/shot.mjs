import { parseArgs } from "node:util"
import { chromium } from "@playwright/test"

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    dark: { type: "boolean" },
    mobile: { type: "boolean" },
    full: { type: "boolean" },
    element: { type: "string" },
    wait: { type: "string", default: "500" },
    width: { type: "string", default: "1280" },
    height: { type: "string", default: "900" },
  },
})

const [url, out] = positionals
if (!url || !out) {
  console.error(
    "Usage: node scripts/shot.mjs <url> <out.png> [--dark] [--mobile] [--full] [--element <selector>] [--wait <ms>] [--width <px>] [--height <px>]",
  )
  process.exit(1)
}

const browser = await chromium.launch()
const page = await browser.newPage({
  viewport: values.mobile
    ? { width: 390, height: 844 }
    : { width: Number(values.width), height: Number(values.height) },
  colorScheme: values.dark ? "dark" : "light",
})
page.on("pageerror", (error) => console.error(`pageerror: ${error.message}`))
page.on("console", (message) => message.type() === "error" && console.error(`console: ${message.text()}`))

await page.goto(url, { waitUntil: "networkidle" })
await page.waitForTimeout(Number(values.wait))

if (values.element) {
  const target = page.locator(values.element).first()
  await target.scrollIntoViewIfNeeded()
  await target.screenshot({ path: out })
} else {
  await page.screenshot({ path: out, fullPage: values.full })
}

await browser.close()
console.log(out)
