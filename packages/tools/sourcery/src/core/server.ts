import fs from "node:fs"
import http from "node:http"
import path from "node:path"
import chalk from "chalk"
import { type Editor, launchIDE } from "launch-ide"
import portfinder from "portfinder"
import { formatHotKeys, getDefaultHotKeys } from "./hot-keys"
import type { ResolvedOptions } from "./options"

const HOST = "127.0.0.1"

let server: Promise<number> | null = null

export function startServer(options: ResolvedOptions) {
  server ??= listen(options)
  return server
}

async function listen(options: ResolvedOptions) {
  const port = await portfinder.getPortPromise({ port: options.port, host: HOST })
  const instance = http.createServer((request, response) => handleRequest(request, response, options))

  await new Promise<void>((resolve, reject) => {
    instance.once("error", reject)
    instance.listen(port, HOST, resolve)
  })
  instance.unref()

  const hotKeys = options.hotKeys ?? getDefaultHotKeys(process.platform === "darwin")
  console.log(`${chalk.magenta("sourcery")} hold ${formatHotKeys(hotKeys)} and click an element to open its source`)
  return port
}

function handleRequest(request: http.IncomingMessage, response: http.ServerResponse, options: ResolvedOptions) {
  response.setHeader("Access-Control-Allow-Origin", "*")

  const url = new URL(request.url ?? "/", `http://${HOST}`)
  const target = url.searchParams.get("file")
  if (url.pathname !== "/open" || !target) {
    response.writeHead(404).end()
    return
  }

  const file = path.resolve(options.root, target)
  if (!fs.existsSync(file)) {
    response.writeHead(404).end()
    return
  }

  withoutElectronNode(() =>
    launchIDE({
      file,
      line: Number(url.searchParams.get("line")) || 1,
      column: Number(url.searchParams.get("column")) || 1,
      rootDir: options.root,
      ...(options.editor ? { editor: options.editor as Editor } : {}),
    }),
  )
  response.writeHead(204).end()
}

function withoutElectronNode(run: () => void) {
  const electronRunAsNode = process.env.ELECTRON_RUN_AS_NODE
  delete process.env.ELECTRON_RUN_AS_NODE
  try {
    run()
  } finally {
    if (electronRunAsNode !== undefined) process.env.ELECTRON_RUN_AS_NODE = electronRunAsNode
  }
}
