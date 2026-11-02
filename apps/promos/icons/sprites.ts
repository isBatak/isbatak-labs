import { execFileSync } from "node:child_process"
import { copyFileSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { join } from "node:path"
import { fileURLToPath } from "node:url"

const packageDir = (name: string) => fileURLToPath(new URL(`../node_modules/${name}`, import.meta.url))

const lucide = join(packageDir("lucide-static"), "icons")
const phosphor = join(packageDir("@phosphor-icons/core"), "assets/fill")
const material = join(packageDir("@material-symbols/svg-400"), "rounded")
const pixel = join(packageDir("pixelarticons"), "svg")

const sets: Record<string, Record<string, string>> = {
  lucide: {
    check: join(lucide, "check.svg"),
    "chevron-down": join(lucide, "chevron-down.svg"),
    close: join(lucide, "x.svg"),
    lock: join(lucide, "lock.svg"),
    search: join(lucide, "search.svg"),
    view: join(lucide, "eye.svg"),
    "view-off": join(lucide, "eye-off.svg"),
    heart: join(lucide, "heart.svg"),
    star: join(lucide, "star.svg"),
    bell: join(lucide, "bell.svg"),
    settings: join(lucide, "settings.svg"),
    home: join(lucide, "house.svg"),
    mail: join(lucide, "mail.svg"),
  },
  phosphor: {
    check: join(phosphor, "check-fill.svg"),
    "chevron-down": join(phosphor, "caret-down-fill.svg"),
    close: join(phosphor, "x-fill.svg"),
    lock: join(phosphor, "lock-fill.svg"),
    search: join(phosphor, "magnifying-glass-fill.svg"),
    view: join(phosphor, "eye-fill.svg"),
    "view-off": join(phosphor, "eye-slash-fill.svg"),
    heart: join(phosphor, "heart-fill.svg"),
    star: join(phosphor, "star-fill.svg"),
    bell: join(phosphor, "bell-fill.svg"),
    settings: join(phosphor, "gear-fill.svg"),
    home: join(phosphor, "house-fill.svg"),
    mail: join(phosphor, "envelope-fill.svg"),
  },
  material: {
    check: join(material, "check-fill.svg"),
    "chevron-down": join(material, "keyboard_arrow_down-fill.svg"),
    close: join(material, "close-fill.svg"),
    lock: join(material, "lock-fill.svg"),
    search: join(material, "search-fill.svg"),
    view: join(material, "visibility-fill.svg"),
    "view-off": join(material, "visibility_off-fill.svg"),
    heart: join(material, "favorite-fill.svg"),
    star: join(material, "star-fill.svg"),
    bell: join(material, "notifications-fill.svg"),
    settings: join(material, "settings-fill.svg"),
    home: join(material, "home-fill.svg"),
    mail: join(material, "mail-fill.svg"),
  },
  pixel: {
    check: join(pixel, "check.svg"),
    "chevron-down": join(pixel, "chevron-down.svg"),
    close: join(pixel, "close.svg"),
    lock: join(pixel, "lock.svg"),
    search: join(pixel, "search.svg"),
    view: join(pixel, "eye.svg"),
    "view-off": join(pixel, "eye-off.svg"),
    heart: join(pixel, "heart.svg"),
    star: join(pixel, "star.svg"),
    bell: join(pixel, "bell.svg"),
    settings: join(pixel, "settings-cog.svg"),
    home: join(pixel, "home.svg"),
    mail: join(pixel, "mail.svg"),
  },
}

const paintAttributes = ["fill", "stroke", "stroke-width", "stroke-linecap", "stroke-linejoin"]

function withPaintOnGroup(svg: string) {
  const [, attributes = "", body = ""] = svg.match(/<svg([^>]*)>([\s\S]*)<\/svg>/) ?? []
  const viewBox = attributes.match(/viewBox="([^"]*)"/)?.[1] ?? "0 0 24 24"
  const paint = new Map(
    paintAttributes.flatMap((name) => {
      const value = attributes.match(new RegExp(`\\s${name}="([^"]*)"`))?.[1]
      return value ? [[name, value] as const] : []
    }),
  )
  if (!paint.has("fill")) paint.set("fill", "currentColor")
  const group = [...paint].map(([name, value]) => `${name}="${value}"`).join(" ")
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}"><g ${group}>${body}</g></svg>`
}

const outDir = fileURLToPath(new URL("../public/icons/", import.meta.url))
const workDir = fileURLToPath(new URL("../node_modules/.cache/icon-sets/", import.meta.url))
rmSync(workDir, { recursive: true, force: true })
mkdirSync(outDir, { recursive: true })

copyFileSync(join(packageDir("@isbatak/icons"), "generated/sprite.svg"), join(outDir, "boring.svg"))

for (const [set, icons] of Object.entries(sets)) {
  const setDir = join(workDir, set)
  mkdirSync(join(setDir, "svg"), { recursive: true })
  for (const [name, file] of Object.entries(icons)) {
    writeFileSync(join(setDir, "svg", `${name}.svg`), withPaintOnGroup(readFileSync(file, "utf8")))
  }
  writeFileSync(
    join(setDir, "ikona.config.ts"),
    `export default { outputDir: "./generated", icons: { inputDir: "./svg", spriteOutputDir: "./generated", optimize: true } }\n`,
  )
  execFileSync("ikona", ["--force"], { cwd: setDir, stdio: "ignore" })
  copyFileSync(join(setDir, "generated/sprite.svg"), join(outDir, `${set}.svg`))
}

console.log(`icon sprites: boring, ${Object.keys(sets).join(", ")} -> public/icons/`)
