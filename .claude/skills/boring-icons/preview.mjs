import { mkdtemp, readFile, writeFile } from "node:fs/promises"
import { tmpdir } from "node:os"
import { basename, join, resolve } from "node:path"
import { parseArgs } from "node:util"

import { importFromCwd, loadReferences } from "./boring.mjs"

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    ref: { type: "string", default: "folder,file,settings,search" },
    sprite: { type: "string" },
  },
})

if (positionals.length === 0) {
  console.error("Usage: node preview.mjs <icon.svg>... [--ref folder,file] [--sprite path/to/sprite.svg]")
  process.exit(1)
}

const references = await loadReferences({ sprite: values.sprite })
const inner = (svg) =>
  svg
    .slice(svg.indexOf(">", svg.indexOf("<svg")) + 1, svg.lastIndexOf("</svg>"))
    .replace(/\b(fill|stroke)="(black|#000|#000000)"/gi, '$1="currentColor"')

const candidates = await Promise.all(
  positionals.map(async (file) => ({ label: basename(file, ".svg"), body: inner(await readFile(resolve(file), "utf8")) })),
)
const refs = values.ref
  .split(",")
  .filter(Boolean)
  .map((name) => {
    const body = references.body(name)
    if (!body) throw new Error(`No reference icon named "${name}"`)
    return { label: `ref: ${name}`, body }
  })

const cell = ({ label, body }) => `
  <figure>
    <svg viewBox="0 0 24 24" class="s96">${body}</svg>
    <div class="row"><svg viewBox="0 0 24 24" class="s24">${body}</svg><svg viewBox="0 0 24 24" class="s16">${body}</svg></div>
    <figcaption>${label}</figcaption>
  </figure>`

const panel = (theme) => `<section class="${theme}">${[...candidates, ...refs].map(cell).join("")}</section>`

const html = `<!doctype html>
<style>
  body { margin: 0; font: 12px system-ui; }
  section { display: flex; flex-wrap: wrap; gap: 20px; padding: 20px; }
  .light { background: #f4f4f5; color: #111; }
  .dark { background: #18191b; color: #fff; }
  figure { margin: 0; display: grid; justify-items: center; gap: 8px; width: 120px; }
  .row { display: flex; gap: 12px; align-items: center; }
  .s96 { width: 96px; height: 96px; background-image: linear-gradient(#8881 1px, transparent 1px), linear-gradient(90deg, #8881 1px, transparent 1px); background-size: 4px 4px; }
  .s24 { width: 24px; height: 24px; }
  .s16 { width: 16px; height: 16px; }
  figcaption { opacity: 0.6; }
</style>
${panel("light")}${panel("dark")}`

const dir = await mkdtemp(join(tmpdir(), "boring-icons-"))
const htmlPath = join(dir, "preview.html")
const pngPath = join(dir, "preview.png")
await writeFile(htmlPath, html)

const { chromium } = await importFromCwd("playwright", "@playwright/test")
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1000, height: 300 }, deviceScaleFactor: 2 })
await page.goto(`file://${htmlPath}`)
await page.screenshot({ path: pngPath, fullPage: true })
await browser.close()

console.log(pngPath)
