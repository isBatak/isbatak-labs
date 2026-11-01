import { execFileSync } from "node:child_process"
import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises"
import { iconManifest } from "@boring-icons/react/manifest"
import * as icons from "@boring-icons/react"
import { createElement } from "react"
import { renderToStaticMarkup } from "react-dom/server"

const svgDir = new URL("../svg/", import.meta.url)
const extraDir = new URL("../extra/", import.meta.url)
const tagsFile = new URL("../tags.json", import.meta.url)
const catalogFile = new URL("../../../../plugins/isbatak-icons/skills/find-icons/catalog.json", import.meta.url)

await rm(svgDir, { recursive: true, force: true })
await mkdir(svgDir, { recursive: true })

for (const entry of iconManifest.icons) {
  const markup = renderToStaticMarkup(createElement(icons[entry.name]))
  const body = markup.replace(/^<svg[^>]*>/, "").replace(/<\/svg>$/, "")
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${body}</g></svg>\n`
  await writeFile(new URL(entry.sourceFile, svgDir), svg)
}

console.log(`Extracted ${iconManifest.icons.length} icons from @boring-icons/react ${iconManifest.sourceVersion}`)

const extras = (await readdir(extraDir)).filter((file) => file.endsWith(".svg"))
const clashes = extras.filter((file) => iconManifest.icons.some((entry) => entry.sourceFile === file))
if (clashes.length) throw new Error(`Extra icons clash with Boring Icons: ${clashes.join(", ")}`)
await cp(extraDir, svgDir, { recursive: true, filter: (source) => !source.endsWith(".md") })

console.log(`Added ${extras.length} extra icons`)

const names = (await readdir(svgDir))
  .filter((file) => file.endsWith(".svg"))
  .map((file) => file.slice(0, -4))
  .sort()
const tags = JSON.parse(await readFile(tagsFile, "utf8"))
const untagged = names.filter((name) => !tags[name]?.length)
if (untagged.length) throw new Error(`Add tags for these icons to tags.json: ${untagged.join(", ")}`)
const stale = Object.keys(tags).filter((name) => !names.includes(name))
if (stale.length) throw new Error(`tags.json lists icons that don't exist: ${stale.join(", ")}`)

const catalog = names.map((name) => ({ name, tags: tags[name] }))
await writeFile(catalogFile, `${JSON.stringify(catalog, null, 2)}\n`)

console.log(`Wrote ${catalog.length} icons to the find-icons skill catalog`)

execFileSync("ikona", ["--force"], { stdio: "inherit" })
