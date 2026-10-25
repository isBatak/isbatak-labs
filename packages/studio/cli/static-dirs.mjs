import { cpSync, existsSync, readFileSync, statSync } from "node:fs"
import { extname, join, resolve } from "node:path"

const contentTypes = {
  ".css": "text/css",
  ".gif": "image/gif",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
}

export function parseStaticDirs(entries, cwd) {
  return entries.map((entry) => {
    const separator = entry.lastIndexOf(":")
    const from = separator > 0 ? entry.slice(0, separator) : entry
    const to = separator > 0 ? entry.slice(separator + 1) : "/"
    return { from: resolve(cwd, from), to: `/${to.replace(/^\/+|\/+$/g, "")}` }
  })
}

const locate = (mapping, url) => {
  if (statSync(mapping.from).isFile()) return url === mapping.to ? mapping.from : undefined
  const prefix = mapping.to === "/" ? "/" : `${mapping.to}/`
  if (!url.startsWith(prefix)) return undefined
  const file = join(mapping.from, url.slice(prefix.length))
  return file.startsWith(mapping.from) && existsSync(file) && statSync(file).isFile() ? file : undefined
}

export function staticDirs(mappings) {
  let outDir

  return {
    name: "panda-studio:static-dirs",
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir)
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = decodeURIComponent((req.url ?? "").split("?")[0])
        for (const mapping of mappings) {
          const file = locate(mapping, url)
          if (!file) continue
          res.setHeader("content-type", contentTypes[extname(file)] ?? "application/octet-stream")
          res.end(readFileSync(file))
          return
        }
        next()
      })
    },
    writeBundle() {
      for (const mapping of mappings) cpSync(mapping.from, join(outDir, mapping.to), { recursive: true })
    },
  }
}
