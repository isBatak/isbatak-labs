import { join, resolve } from "node:path"
import { sourcery } from "@isbatak/sourcery/vite"
import pandacss from "@pandacss/dev/postcss"
import react from "@vitejs/plugin-react"
import { searchForWorkspaceRoot } from "vite"

import { studioRoot } from "./project.mjs"
import { staticDirs } from "./static-dirs.mjs"
import { studioSource } from "./source-writer.mjs"

const projectModule = "virtual:panda-studio/project"

const inspector = () =>
  sourcery({
    ...(studioRoot.includes("/node_modules/") && { enabled: false }),
    root: studioRoot,
    exclude: ["/packages/ui/", "/packages/panda/"],
    panda: { modules: ["styled-system/jsx", "@isbatak/panda-ds/jsx"] },
  })

function studioProject(project) {
  return {
    name: "panda-studio:project",
    resolveId: (id) => (id === projectModule ? `\0${projectModule}` : undefined),
    load: (id) =>
      id === `\0${projectModule}`
        ? `export const projectName = ${JSON.stringify(project.projectName)}
export const designSystem = ${JSON.stringify(project.designSystem)}
export const themeVariants = ${JSON.stringify(project.themeVariants)}`
        : undefined,
  }
}

function designSystemRedirect(redirect) {
  return {
    name: "panda-studio:design-system",
    enforce: "pre",
    resolveId(id, importer) {
      const target = redirect?.targets[id]
      if (!target || importer?.startsWith(redirect.root)) return undefined
      return target
    },
  }
}

export function mountCanvas(canvasServer, canvasBase) {
  return {
    name: "panda-studio:canvas",
    configureServer(server) {
      server.middlewares.use((req, res, next) =>
        req.url?.startsWith(canvasBase) ? canvasServer.middlewares(req, res, next) : next(),
      )
      server.httpServer?.on("close", () => canvasServer.close())
    },
  }
}

function partConfig(project, name, base) {
  const part = project[name]
  return {
    configFile: false,
    root: studioRoot,
    base,
    cacheDir: join(project.cacheDir, `vite-${name}`),
    resolve: {
      alias: { "styled-system": part.outdir },
    },
    css: {
      postcss: {
        plugins: [pandacss({ configPath: part.generatedConfig, cwd: part.cwd })],
      },
    },
  }
}

export function createViteConfigs({
  project,
  invocationDir,
  base = "/",
  port,
  canvasHmrPort,
  outDir,
  staticDirs: mappings = [],
}) {
  const out = resolve(invocationDir, outDir ?? "panda-studio-static")
  const canvasBase = `${base.replace(/\/?$/, "/")}canvas/`
  const allow = [studioRoot, project.cwd, searchForWorkspaceRoot(project.cwd)]

  const shell = {
    ...partConfig(project, "shell", base),
    publicDir: false,
    plugins: [
      react(),
      inspector(),
      studioProject(project),
      designSystemRedirect(project.shell.redirect),
      studioSource({ projectRoot: project.cwd, designSystem: project.designSystem, configPath: project.configPath }),
      staticDirs(mappings),
    ],
    server: { port, fs: { allow } },
    build: {
      outDir: out,
      emptyOutDir: true,
      chunkSizeWarningLimit: 1500,
      rollupOptions: { input: { studio: join(studioRoot, "index.html") } },
    },
  }

  const canvas = {
    ...partConfig(project, "canvas", canvasBase),
    publicDir: false,
    plugins: [react(), inspector(), studioProject(project), designSystemRedirect(project.canvas.redirect)],
    server: { middlewareMode: true, hmr: { port: canvasHmrPort }, fs: { allow } },
    build: {
      outDir: join(out, "canvas"),
      emptyOutDir: true,
      chunkSizeWarningLimit: 1500,
      rollupOptions: { input: { canvas: join(studioRoot, "canvas.html") } },
    },
  }

  return { shell, canvas, canvasBase }
}
