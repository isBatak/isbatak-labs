import { execFile } from "node:child_process"
import { existsSync, watch as watchFiles } from "node:fs"
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises"
import { createRequire } from "node:module"
import { basename, dirname, extname } from "node:path"
import { fileURLToPath } from "node:url"
import { promisify } from "node:util"
import { createNodeDriver } from "@pandacss/compiler"
import { transformSource } from "@pandacss/transformer"
import preact from "@preact/preset-vite"
import { svelte } from "@sveltejs/vite-plugin-svelte"
import vue from "@vitejs/plugin-vue"
import { format } from "oxfmt"
import { build } from "vite"
import solid from "vite-plugin-solid"

const root = fileURLToPath(new URL("..", import.meta.url))
const watch = process.argv.includes("--watch")
const run = promisify(execFile)
const preactDir = dirname(createRequire(import.meta.url).resolve("preact/package.json"))

const stylings = [
  { id: "panda", label: "Panda CSS" },
  { id: "css", label: "CSS" },
]

const apis = [
  { id: "zag", label: "Zag" },
  { id: "ark", label: "Ark UI" },
]

const components = [
  {
    id: "wheel-picker",
    zag: "@isbatak/zag-wheel-picker",
    ark: "@isbatak/ark-wheel-picker",
    panda: "@isbatak/panda-wheel-picker",
    recipe: "wheelPicker",
    machine: "withSnapshot",
    collection: "createWheelPickerCollection",
  },
  {
    id: "masonry",
    zag: "@isbatak/zag-masonry",
    ark: "@isbatak/ark-masonry",
    panda: "@isbatak/panda-masonry",
    recipe: "masonry",
    machine: "withControls",
  },
]

const componentOf = (id) => components.find((component) => id.startsWith(`${component.id}-`))

const frameworks = [
  {
    id: "react",
    ark: ["@ark-ui/react", "@zag-js/react"],
    label: "React",
    ext: "tsx",
    lang: "tsx",
    runtime: ["react", "react-dom"],
    target: "src/components",
    exportName: (name) => name,
    external: [/^react($|\/)/, /^react-dom($|\/)/],
    banner: '"use client";',
  },
  {
    id: "vue",
    ark: ["@ark-ui/vue", "@zag-js/vue"],
    label: "Vue",
    ext: "vue",
    lang: "vue",
    runtime: ["vue"],
    target: "src/components",
    plugins: () => [vue()],
  },
  {
    id: "svelte",
    ark: ["@ark-ui/svelte", "@zag-js/svelte"],
    label: "Svelte",
    ext: "svelte",
    lang: "svelte",
    runtime: ["svelte"],
    target: "src/lib/components",
    plugins: () => [svelte()],
  },
  {
    id: "solid",
    ark: ["@ark-ui/solid", "@zag-js/solid"],
    label: "Solid",
    ext: "tsx",
    lang: "tsx",
    runtime: ["solid-js"],
    target: "src/components",
    exportName: (name) => name,
    plugins: () => [solid()],
  },
  {
    id: "preact",
    label: "Preact",
    ark: ["@ark-ui/react", "@zag-js/react"],
    arkSource: "react",
    ext: "tsx",
    lang: "tsx",
    runtime: ["preact", "react"],
    target: "src/components",
    exportName: (name) => name,
    plugins: () => [preact({ reactAliasesEnabled: false })],
    alias: [
      { find: /^react-dom($|\/)/, replacement: `${preactDir}/compat$1` },
      { find: /^react\/jsx-(dev-)?runtime$/, replacement: `${preactDir}/jsx-runtime` },
      { find: /^react$/, replacement: `${preactDir}/compat` },
      { find: /^preact($|\/)/, replacement: `${preactDir}$1` },
    ],
  },
  {
    id: "vanilla",
    label: "Vanilla",
    ext: "ts",
    lang: "ts",
    runtime: [],
    target: "src/components",
    exportName: (name) => `create${name}`,
  },
]

const pascalCase = (id) => id.replace(/(^|-)(\w)/g, (_, __, char) => char.toUpperCase())

const sourceDir = (api, framework) => (api.id === "ark" && framework.arkSource) || framework.id

const examplePath = (api, framework, id) =>
  `${root}/src/examples/${api.id}/${sourceDir(api, framework)}/${id}.${framework.ext}`

const packageName = (specifier) =>
  specifier
    .split("/")
    .slice(0, specifier.startsWith("@") ? 2 : 1)
    .join("/")

async function listExamples() {
  const files = await readdir(`${root}/src/examples/zag/react`)
  return files.filter((file) => file.endsWith(".tsx")).map((file) => basename(file, extname(file)))
}

const cacheDir = `${root}/node_modules/.cache/compositions`

const driver = await createNodeDriver({ cwd: root })

const {
  $schema: _schema,
  ignorePatterns: _ignorePatterns,
  ...formatOptions
} = JSON.parse(await readFile(`${root}/../../.oxfmtrc.json`, "utf8"))

const importsOf = (source) =>
  [...source.matchAll(/from "([^"]+)"|import "([^"]+)"/g)].map((match) => match[1] ?? match[2])

const dependenciesOf = (api, framework, source) => [
  ...new Set([
    ...importsOf(source)
      .filter((path) => !path.startsWith(".") && !path.startsWith("styled-system/"))
      .map(packageName)
      .filter((name) => !framework.runtime.includes(name)),
    ...(framework[api.id] ?? []),
  ]),
]

function splitBlocks(css) {
  const blocks = []
  let depth = 0
  let start = 0
  for (let index = 0; index < css.length; index++) {
    if (css[index] === "{") depth++
    if (css[index] === "}") depth--
    if (depth === 0 && (css[index] === "}" || css[index] === ";")) {
      blocks.push(css.slice(start, index + 1).trim())
      start = index + 1
    }
  }
  return blocks
}

const isLayer = (block, name) => block.startsWith(`@layer ${name} {`)

const paletteLayer = (base) => {
  const declarations = base.match(/--colors-color-palette-[\w-]+: [^;]+;/g) ?? []
  return `@layer base {\n  :where(html) {\n${declarations.map((declaration) => `    ${declaration}`).join("\n")}\n  }\n}`
}

async function generateStylesheet(id) {
  const outfile = `${cacheDir}/${id}.css`
  await run(`${root}/node_modules/.bin/panda`, ["cssgen", "--include", `src/examples/*/*/${id}.*`, "-o", outfile], {
    cwd: root,
  })
  const blocks = splitBlocks(await readFile(outfile, "utf8"))
    .filter((block) => !isLayer(block, "reset"))
    .map((block) => (isLayer(block, "base") ? paletteLayer(block) : block))
  return `${blocks.join("\n")}\n`
}

function compileStyles(api, framework, id, source) {
  const file = examplePath(api, framework, id)
  const compile = (code, path) => {
    const result = transformSource({ path, source: code, compiler: driver.compiler })
    const compiled = result.changed ? result.code : code
    return compiled.replace(/^([ \t]*)(import .*\n)(?![ \t]*import )/m, `$1$2$1import "./${id}.css"\n`)
  }
  const script = /(<script[^>]*>)([\s\S]*?)(<\/script>)/
  return script.test(source)
    ? source.replace(script, (_, open, body, close) => open + compile(body, `${file}.ts`) + close)
    : compile(source, file)
}

async function readExample(api, framework, id, stylesheet) {
  const source = await readFile(examplePath(api, framework, id), "utf8")
  const name = `${id}.${framework.ext}`
  const dir = `${framework.target}/${id}`
  const file = (code) => ({ name, lang: framework.lang, target: `${dir}/${name}`, code })

  const formatted = await format(name, compileStyles(api, framework, id, source), { ...formatOptions, svelte: true })
  if (formatted.errors.length)
    throw new Error(`[compositions] failed to format ${name}: ${formatted.errors[0].message}`)

  return {
    panda: {
      dependencies: dependenciesOf(api, framework, source),
      devDependencies: [componentOf(id).panda],
      files: [file(source)],
    },
    css: {
      dependencies: dependenciesOf(api, framework, formatted.code),
      devDependencies: [],
      files: [file(formatted.code), { name: `${id}.css`, lang: "css", target: `${dir}/${id}.css`, code: stylesheet }],
    },
  }
}

async function writeManifest() {
  const ids = await listExamples()
  const examples = await Promise.all(
    ids.map(async (id) => {
      const stylesheet = await generateStylesheet(id)
      const readApi = async (api) => {
        const entries = await Promise.all(
          frameworks.map(async (framework) => {
            if (!existsSync(examplePath(api, framework, id))) {
              if (api.id === "zag" || framework.ark)
                console.warn(`[compositions] ${id} has no ${framework.label} ${api.label} version`)
              return undefined
            }
            return [framework.id, await readExample(api, framework, id, stylesheet)]
          }),
        )
        return [api.id, Object.fromEntries(entries.filter(Boolean))]
      }
      return { id, apis: Object.fromEntries(await Promise.all(apis.map(readApi))) }
    }),
  )

  await mkdir(`${root}/dist`, { recursive: true })
  await writeFile(
    `${root}/dist/manifest.json`,
    `${JSON.stringify({ frameworks: frameworks.map(({ id, label }) => ({ id, label })), stylings, apis, examples }, null, 2)}\n`,
  )
  return ids
}

function examplesModule(framework, ids) {
  const virtualId = "virtual:examples"
  const resolvedId = `\0${virtualId}`
  return {
    name: "compositions-examples",
    resolveId: (id) => (id === virtualId ? resolvedId : undefined),
    load(id) {
      if (id !== resolvedId) return undefined
      const available = apis.flatMap((api) =>
        ids.filter((id) => existsSync(examplePath(api, framework, id))).map((id) => ({ api, id })),
      )
      const imports = available.map(({ api, id }, index) =>
        framework.exportName
          ? `import { ${framework.exportName(pascalCase(id))} as Example${index} } from ${JSON.stringify(examplePath(api, framework, id))}`
          : `import Example${index} from ${JSON.stringify(examplePath(api, framework, id))}`,
      )
      const entries = apis.map((api) => {
        const members = available.flatMap((entry, index) =>
          entry.api === api ? [`${JSON.stringify(entry.id)}: Example${index}`] : [],
        )
        return `${api.id}: { ${members.join(", ")} }`
      })
      return `${imports.join("\n")}\nexport const examples = { ${entries.join(", ")} }\n`
    },
  }
}

function exampleState() {
  const prefix = "\0compositions-example:"
  const state = JSON.stringify(`${root}mount/example-state.ts`)
  const exampleFile = /\/src\/examples\/(zag|ark)\/[^/]+\/([^/.?]+)\.\w+(\?.*)?$/
  const arkSource = (component) => new RegExp(`/packages/ark/${component.id}/src/`)
  return {
    name: "compositions-example-state",
    enforce: "pre",
    resolveId(source, importer) {
      if (!importer) return undefined
      const [, api, example] = importer.match(exampleFile) ?? []
      const exampleComponent = example && componentOf(example)
      if (/(^|\/)styled-system\/recipes$/.test(source) && exampleComponent) return `${prefix}recipes:${example}`
      const component = components.find(({ zag }) => zag === source)
      if (component && api === "zag") return `${prefix}machine:${component.id}:${example}`
      if (component && arkSource(component).test(importer)) return `${prefix}machine:${component.id}:`
      const arkComponent = components.find(({ ark }) => source.startsWith(`${ark}/`))
      if (arkComponent?.collection && api === "ark") return `${prefix}ark:${arkComponent.id}:${example}:${source}`
      return undefined
    },
    load(id) {
      if (!id.startsWith(prefix)) return undefined
      const [kind, ...rest] = id.slice(prefix.length).split(":")
      if (kind === "recipes") {
        const [example] = rest
        const { recipe } = componentOf(example)
        return [
          `import { ${recipe} as recipe } from "styled-system/recipes"`,
          `import { withRecipeControls } from ${state}`,
          `export * from "styled-system/recipes"`,
          `export const ${recipe} = withRecipeControls(recipe, ${JSON.stringify(example)})`,
        ].join("\n")
      }
      const [componentId, example, source] = rest
      const component = components.find(({ id }) => id === componentId)
      if (kind === "ark")
        return [
          `import { ${component.collection} as create } from ${JSON.stringify(source)}`,
          `import { tagCollection } from ${state}`,
          `export * from ${JSON.stringify(source)}`,
          `export const ${component.collection} = (options) => tagCollection(create(options), ${JSON.stringify(example)})`,
        ].join("\n")
      return [
        `import { machine } from ${JSON.stringify(component.zag)}`,
        `import { ${component.machine} } from ${state}`,
        `export * from ${JSON.stringify(component.zag)}`,
        `const controlledMachine = ${component.machine}(machine${example ? `, ${JSON.stringify(example)}` : ""})`,
        `export { controlledMachine as machine }`,
      ].join("\n")
    },
  }
}

await run(`${root}/node_modules/.bin/panda`, ["codegen"], { cwd: root })

const ids = await writeManifest()

if (watch) watchFiles(`${root}/src`, { recursive: true }, () => writeManifest())

await Promise.all(
  frameworks.map((framework) =>
    build({
      root,
      configFile: false,
      logLevel: "warn",
      plugins: [exampleState(), examplesModule(framework, ids), ...(framework.plugins?.() ?? [])],
      resolve: {
        alias: [{ find: "styled-system", replacement: `${root}/styled-system` }, ...(framework.alias ?? [])],
      },
      define: { "process.env.NODE_ENV": JSON.stringify("production") },
      build: {
        outDir: "dist",
        emptyOutDir: false,
        copyPublicDir: false,
        watch: watch ? {} : null,
        lib: {
          entry: `mount/${framework.id}.${framework.ext === "tsx" ? "tsx" : "ts"}`,
          formats: ["es"],
          fileName: framework.id,
          cssFileName: framework.id,
        },
        rollupOptions: {
          external: framework.external ?? [],
          output: { banner: framework.banner ?? "" },
          onLog: (level, log, handler) => log.code !== "MODULE_LEVEL_DIRECTIVE" && handler(level, log),
        },
      },
    }),
  ),
)
