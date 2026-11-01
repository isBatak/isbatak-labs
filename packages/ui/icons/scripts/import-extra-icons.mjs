import { mkdir, writeFile } from "node:fs/promises"

const TABLER_VERSION = "v3.48.0"
const SIMPLE_ICONS_VERSION = "15"
const STROKE_WIDTH = "1.5"

const tabler = {
  "alert-filled": "filled/alert-circle",
  "brand-css3": "outline/brand-css3",
  "brand-github": "outline/brand-github",
  "brand-javascript": "outline/brand-javascript",
  "brand-nextjs": "outline/brand-nextjs",
  "brand-npm": "outline/brand-npm",
  "brand-openai": "outline/brand-openai",
  "brand-react": "outline/brand-react",
  "brand-solidjs": "outline/brand-solidjs",
  "brand-storybook": "outline/brand-storybook",
  "brand-svelte": "outline/brand-svelte",
  "brand-typescript": "outline/brand-typescript",
  "brand-vscode": "outline/brand-vscode",
  "brand-vue": "outline/brand-vue",
  "brand-x": "outline/brand-x",
  "color-picker": "outline/color-picker",
  components: "outline/components",
  contrast: "outline/contrast",
  copy: "outline/copy",
  focus: "outline/focus-2",
  "grip-vertical": "outline/grip-vertical",
  keyboard: "outline/keyboard",
  markdown: "outline/markdown",
  moon: "outline/moon",
  package: "outline/package",
  pointer: "outline/pointer",
  "quote-filled": "filled/quote",
  sparkles: "outline/sparkles",
  sun: "outline/sun",
  "text-direction": "outline/text-direction-ltr",
  tool: "outline/tool",
}

const simpleIcons = {
  "brand-anthropic": "anthropic",
}

const brandLogos = {
  "brand-ark": {
    url: "https://raw.githubusercontent.com/chakra-ui/ark/main/website/src/app/icon.svg",
    viewBox: "56 56 400 400",
  },
}

const PRESENTATION_ATTRS = ["fill", "stroke", "stroke-width", "stroke-linecap", "stroke-linejoin"]

function normalize(svg) {
  const source = svg.replace(/<!--[\s\S]*?-->/g, "").trim()
  const [, rootAttrs, children] = source.match(/^<svg([^>]*)>([\s\S]*)<\/svg>$/) ?? []
  if (rootAttrs === undefined) throw new Error("Unexpected SVG shape")

  const attr = (name) =>
    name === "stroke-width" && attr("stroke") ? STROKE_WIDTH : rootAttrs.match(new RegExp(`\\s${name}="([^"]*)"`))?.[1]
  const groupAttrs = PRESENTATION_ATTRS.filter(attr)
    .map((name) => `${name}="${attr(name)}"`)
    .join(" ")

  return [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${attr("viewBox")}">`,
    `  <g ${groupAttrs}>`,
    children
      .trim()
      .split("\n")
      .map((line) => `    ${line.trim()}`)
      .join("\n"),
    `  </g>`,
    `</svg>`,
    "",
  ].join("\n")
}

async function download(url) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`${res.status} ${url}`)
  return res.text()
}

const outDir = new URL("../extra/", import.meta.url)
await mkdir(outDir, { recursive: true })

await Promise.all(
  Object.entries(tabler).map(async ([name, path]) => {
    const svg = await download(
      `https://raw.githubusercontent.com/tabler/tabler-icons/${TABLER_VERSION}/icons/${path}.svg`,
    )
    await writeFile(new URL(`${name}.svg`, outDir), normalize(svg))
  }),
)

await Promise.all(
  Object.entries(simpleIcons).map(async ([name, slug]) => {
    const svg = await download(`https://cdn.jsdelivr.net/npm/simple-icons@${SIMPLE_ICONS_VERSION}/icons/${slug}.svg`)
    const filled = svg.replace(/<title>[^<]*<\/title>/, "").replace("<svg", '<svg fill="currentColor"')
    await writeFile(new URL(`${name}.svg`, outDir), normalize(filled))
  }),
)

await Promise.all(
  Object.entries(brandLogos).map(async ([name, { url, viewBox }]) => {
    const [, d] = (await download(url)).match(/<path\s+d="([^"]+)"\s+fill="white"/) ?? []
    if (!d) throw new Error(`No foreground path in ${url}`)
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" fill="currentColor"><path d="${d}" /></svg>`
    await writeFile(new URL(`${name}.svg`, outDir), normalize(svg))
  }),
)

console.log(
  `Imported ${Object.keys(tabler).length + Object.keys(simpleIcons).length + Object.keys(brandLogos).length} extra icons`,
)
