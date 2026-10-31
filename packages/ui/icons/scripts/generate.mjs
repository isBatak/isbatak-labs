import { execFileSync } from "node:child_process"
import { mkdir, rm, writeFile } from "node:fs/promises"
import { iconManifest } from "@boring-icons/react/manifest"
import * as icons from "@boring-icons/react"
import { createElement } from "react"
import { renderToStaticMarkup } from "react-dom/server"

const svgDir = new URL("../svg/", import.meta.url)

await rm(svgDir, { recursive: true, force: true })
await mkdir(svgDir, { recursive: true })

for (const entry of iconManifest.icons) {
  const markup = renderToStaticMarkup(createElement(icons[entry.name]))
  const body = markup.replace(/^<svg[^>]*>/, "").replace(/<\/svg>$/, "")
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${body}</g></svg>\n`
  await writeFile(new URL(entry.sourceFile, svgDir), svg)
}

console.log(`Extracted ${iconManifest.icons.length} icons from @boring-icons/react ${iconManifest.sourceVersion}`)

execFileSync("ikona", ["--force"], { stdio: "inherit" })
