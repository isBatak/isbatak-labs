import { spawnSync } from "node:child_process"
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { createRequire } from "node:module"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
import { findConfig, loadConfig } from "@pandacss/dev/node"

export const studioRoot = fileURLToPath(new URL("..", import.meta.url))

const require = createRequire(join(studioRoot, "package.json"))

const toPosix = (path) => path.split("\\").join("/")

const defaultDesignSystem = "@isbatak/panda-ds"
const designSystemEntries = ["css", "recipes", "jsx", "patterns", "tokens", "helpers", "theme", "radius"]
const themeEntries = ["theme", "radius"]

const studioSources = (folders) => folders.map((folder) => join(studioRoot, "src", folder, "**/*.{ts,tsx}"))

const reactUiSources = () => join(dirname(require.resolve("@isbatak/react-ui/package.json")), "src/**/*.{ts,tsx}")

function generate({ name, configPath, cwd, cacheDir, include }) {
  const outdir = join(cacheDir, name, "styled-system")
  const generatedConfig = join(cacheDir, name, "panda.config.mjs")
  mkdirSync(dirname(generatedConfig), { recursive: true })

  writeFileSync(
    generatedConfig,
    `import config from ${JSON.stringify(toPosix(configPath))}

const { optimize, ...rest } = config

export default {
  ...rest,
  include: ${JSON.stringify(include.map(toPosix))},
  exclude: [],
  outdir: ${JSON.stringify(toPosix(outdir))},
  jsxFramework: "react",
  preflight: true,
  staticCss: {
    ...rest.staticCss,
    recipes: "*",
    css: [...(rest.staticCss?.css ?? []), { properties: { colorPalette: ["*"] } }],
  },
}
`,
  )

  const pandaPackage = require.resolve("@pandacss/dev/package.json")
  const { bin } = JSON.parse(readFileSync(pandaPackage, "utf8"))
  const pandaBin = join(dirname(pandaPackage), typeof bin === "string" ? bin : bin.panda)
  const codegen = spawnSync(process.execPath, [pandaBin, "codegen", "--config", generatedConfig, "--cwd", cwd], {
    stdio: "inherit",
  })
  if (codegen.status !== 0) throw new Error(`panda codegen failed for the studio ${name}`)

  return { cwd, generatedConfig, outdir }
}

export async function prepareProject({ cwd: invocationDir, config }) {
  const configPath = findConfig({ cwd: invocationDir, file: config })
  const cwd = dirname(configPath)
  const projectPackage = readNearestPackage(cwd)
  const cacheDir = join(cwd, "node_modules/.cache/panda-studio")
  mkdirSync(cacheDir, { recursive: true })

  const shell = generate({
    name: "shell",
    configPath: join(studioRoot, "panda.config.ts"),
    cwd: studioRoot,
    cacheDir,
    include: [join(studioRoot, "src/main.tsx"), ...studioSources(["shell", "lib"]), reactUiSources()],
  })

  const canvas = generate({
    name: "canvas",
    configPath,
    cwd,
    cacheDir,
    include: [...studioSources(["canvas", "demos", "lib"]), reactUiSources()],
  })

  const { config: resolved } = await loadConfig({ cwd, file: canvas.generatedConfig })
  const designSystem = resolved.designSystem ?? projectPackage.name ?? defaultDesignSystem

  return {
    cwd,
    configPath,
    cacheDir,
    shell: { ...shell, redirect: designSystemRedirect(designSystem, configPath, themeEntries) },
    canvas: { ...canvas, redirect: designSystemRedirect(designSystem, configPath, designSystemEntries) },
    designSystem,
    themeVariants: Object.keys(resolved.themes ?? {}),
    projectName: projectPackage.name ?? "project",
  }
}

function designSystemRedirect(designSystem, configPath, entries) {
  if (designSystem === defaultDesignSystem) return undefined
  const resolveFrom = createRequire(configPath)
  const root = dirname(resolveFrom.resolve(`${designSystem}/package.json`))
  const targets = Object.fromEntries(
    entries.flatMap((entry) => {
      try {
        return [[`${defaultDesignSystem}/${entry}`, resolveFrom.resolve(`${designSystem}/${entry}`)]]
      } catch {
        return []
      }
    }),
  )
  return { root, targets }
}

function readNearestPackage(dir) {
  for (let current = dir; ; current = dirname(current)) {
    const file = join(current, "package.json")
    if (existsSync(file)) return JSON.parse(readFileSync(file, "utf8"))
    if (dirname(current) === current) return {}
  }
}
