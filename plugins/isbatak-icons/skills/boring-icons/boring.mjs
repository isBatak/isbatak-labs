import { readFile } from "node:fs/promises"
import { createRequire } from "node:module"
import { join, resolve } from "node:path"
import { pathToFileURL } from "node:url"

const require = createRequire(join(process.cwd(), "index.js"))

export async function importFromCwd(...names) {
  for (const name of names) {
    let module
    try {
      module = await import(pathToFileURL(require.resolve(name)).href)
    } catch {
      continue
    }
    return module.default instanceof Object ? { ...module.default, ...module } : module
  }
  throw new Error(`Couldn't resolve ${names.join(" or ")} from ${process.cwd()}. Install it or run from a folder that has it.`)
}

const toComponentName = (name) => `Icon${name.replace(/(^|-)([a-z0-9])/g, (_, __, char) => char.toUpperCase())}`

export async function loadReferences({ sprite } = {}) {
  if (sprite) {
    const source = await readFile(resolve(sprite), "utf8")
    const symbols = new Map(
      [...source.matchAll(/<symbol\b[^>]*\bid="([^"]+)"[^>]*>([\s\S]*?)<\/symbol>/g)].map(([, id, body]) => [id, body]),
    )
    return {
      names: [...symbols.keys()],
      body: (name) => symbols.get(name),
    }
  }

  const icons = await importFromCwd("@boring-icons/react")
  const { createElement } = await importFromCwd("react")
  const { renderToStaticMarkup } = await importFromCwd("react-dom/server")
  const { iconManifest } = await importFromCwd("@boring-icons/react/manifest")
  const names = iconManifest.icons.map((icon) => icon.sourceFile.replace(/\.svg$/, ""))

  return {
    names,
    body(name) {
      const component = icons[toComponentName(name)]
      if (!component) return undefined
      const markup = renderToStaticMarkup(createElement(component))
      const inner = markup.replace(/^<svg[^>]*>/, "").replace(/<\/svg>$/, "")
      return `<g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${inner}</g>`
    },
  }
}
