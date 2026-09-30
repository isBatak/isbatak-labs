import { mkdir, readFile, readdir, writeFile } from "node:fs/promises"
import { join } from "node:path"
import type { Plugin } from "vite"

/**
 * Dev-server endpoints that let the studio save themes into the repository, so edits can be reviewed and committed
 * like any other change:
 *
 * - `GET  /__studio/themes`        → `{ [name]: StudioDoc }` from `themes/*.json`
 * - `PUT  /__studio/themes/:name`  → writes `themes/:name.json` and the generated `themes/:name.preset.ts`
 */
export function studioThemes(options: { dir: string }): Plugin {
  const { dir } = options

  return {
    name: "panda-studio:themes",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__studio/themes", async (req, res) => {
        try {
          if (req.method === "GET" && (req.url === "/" || req.url === "")) {
            const files = await readdir(dir).catch(() => [] as string[])
            const themes: Record<string, unknown> = {}
            for (const file of files.filter((file) => file.endsWith(".json"))) {
              themes[file.slice(0, -".json".length)] = JSON.parse(await readFile(join(dir, file), "utf8"))
            }
            res.setHeader("content-type", "application/json")
            res.end(JSON.stringify(themes))
            return
          }

          const name = decodeURIComponent(req.url?.slice(1) ?? "")
          if (req.method === "PUT" && /^[\w-]+$/.test(name)) {
            const body = JSON.parse(await readBody(req)) as { doc: unknown; preset: string }
            await mkdir(dir, { recursive: true })
            await writeFile(join(dir, `${name}.json`), `${JSON.stringify(body.doc, null, 2)}\n`)
            await writeFile(join(dir, `${name}.preset.ts`), body.preset)
            res.statusCode = 204
            res.end()
            return
          }

          res.statusCode = 404
          res.end()
        } catch (error) {
          res.statusCode = 500
          res.end(String(error))
        }
      })
    },
  }
}

function readBody(req: NodeJS.ReadableStream) {
  return new Promise<string>((resolve, reject) => {
    let body = ""
    req.on("data", (chunk) => (body += chunk))
    req.on("end", () => resolve(body))
    req.on("error", reject)
  })
}
