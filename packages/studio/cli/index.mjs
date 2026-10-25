#!/usr/bin/env node
import { createServer as createNetServer } from "node:net"
import { parseArgs } from "node:util"
import { build, createServer } from "vite"

import { prepareProject } from "./project.mjs"
import { parseStaticDirs } from "./static-dirs.mjs"
import { createViteConfigs, mountCanvas } from "./vite-config.mjs"

const help = `Usage: panda-studio [dev|build] [options]

Commands
  dev                     Start the studio for the Panda project in the current directory (default)
  build                   Build the studio as a static site

Options
  -c, --config <file>     Panda config file (default: discovered from the current directory)
  -p, --port <port>       Dev server port (default: 6007)
  -o, --out <dir>         Build output directory (default: panda-studio-static)
      --base <path>       Public base path, e.g. /studio/ (default: /)
  -s, --static-dir <map>  Serve a file or folder, as <from>[:<to>]; repeatable
  -h, --help              Show this help`

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    config: { type: "string", short: "c" },
    port: { type: "string", short: "p" },
    out: { type: "string", short: "o" },
    base: { type: "string" },
    "static-dir": { type: "string", short: "s", multiple: true },
    help: { type: "boolean", short: "h" },
  },
})

const command = positionals[0] ?? "dev"

if (values.help || !["dev", "build"].includes(command)) {
  console.log(help)
  process.exit(values.help ? 0 : 1)
}

const freePort = () =>
  new Promise((resolve, reject) => {
    const probe = createNetServer()
    probe.once("error", reject)
    probe.listen(0, "127.0.0.1", () => {
      const { port } = probe.address()
      probe.close(() => resolve(port))
    })
  })

const cwd = process.cwd()
const project = await prepareProject({ cwd, config: values.config })
const configs = createViteConfigs({
  project,
  invocationDir: cwd,
  base: values.base,
  port: Number(values.port ?? 6007),
  canvasHmrPort: command === "dev" ? await freePort() : undefined,
  outDir: values.out,
  staticDirs: parseStaticDirs(values["static-dir"] ?? [], cwd),
})

if (command === "build") {
  await build(configs.shell)
  await build(configs.canvas)
} else {
  const canvas = await createServer(configs.canvas)
  const server = await createServer({
    ...configs.shell,
    plugins: [...configs.shell.plugins, mountCanvas(canvas, configs.canvasBase)],
  })
  await server.listen()
  server.printUrls()
  server.bindCLIShortcuts({ print: true })
}
