import { parse } from "node:path"
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
    hover: { type: "string" },
    click: { type: "string", multiple: true },
    after: { type: "string", default: "500" },
    frames: { type: "string" },
    eval: { type: "string" },
  },
})

const [url, out] = positionals
if (!url || (!out && !values.eval)) {
  console.error(
    "Usage: node scripts/shot.mjs <url> [out.png] [--dark] [--mobile] [--full] [--element <selector>] [--wait <ms>] [--width <px>] [--height <px>] [--hover <selector>] [--click <selector>]... [--after <ms>] [--frames <ms,ms,...>] [--eval <js>]",
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

const acted = Boolean(values.hover || values.click?.length)
if (values.hover) await page.locator(values.hover).first().hover()
for (const selector of values.click ?? []) await page.locator(selector).first().click()
const actedAt = Date.now()

const shoot = async (path) => {
  if (values.element) {
    const target = page.locator(values.element).first()
    await target.scrollIntoViewIfNeeded()
    await target.screenshot({ path })
  } else {
    await page.screenshot({ path, fullPage: values.full })
  }
  console.log(path)
}

if (values.frames && out) {
  const { dir, name, ext } = parse(out)
  const offsets = values.frames
    .split(",")
    .map(Number)
    .toSorted((a, b) => a - b)
  for (const offset of offsets) {
    await page.waitForTimeout(Math.max(0, offset - (Date.now() - actedAt)))
    await shoot(`${dir || "."}/${name}-${offset}${ext || ".png"}`)
  }
} else {
  if (acted) await page.waitForTimeout(Number(values.after))
  if (values.eval) console.log(JSON.stringify(await page.evaluate(values.eval), null, 2))
  if (out) await shoot(out)
}

await browser.close()
