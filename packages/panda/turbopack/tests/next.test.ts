import { existsSync } from "node:fs"
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { CSS_GLOB, DEFAULT_INCLUDE, INTERNAL_CSS_IMPORT, LOADER_PATH, createTurbopackRules } from "../src/index"
import { withPandaCss } from "../src/next"

let cwd: string

beforeEach(async () => {
  cwd = await mkdtemp(join(tmpdir(), "panda-turbopack-"))
  await writeFile(
    join(cwd, "panda.config.mjs"),
    `export default { include: ["./src/**/*.tsx"], outdir: "styled-system" }`,
  )
})

afterEach(async () => {
  await rm(cwd, { recursive: true, force: true })
})

describe("createTurbopackRules", () => {
  it("runs the loader on JS, TS and CSS modules outside node_modules", () => {
    const rule = { condition: { not: "foreign" }, loaders: [{ loader: LOADER_PATH, options: { cwd } }] }
    expect(createTurbopackRules({ cwd })).toEqual({ [DEFAULT_INCLUDE[0]!]: rule, [CSS_GLOB]: rule })
  })

  it("creates one rule per include glob", () => {
    expect(Object.keys(createTurbopackRules({ include: ["./app/**/*.tsx", "./src/**/*.ts"] }))).toEqual([
      "./app/**/*.tsx",
      "./src/**/*.ts",
      CSS_GLOB,
    ])
  })
})

describe("withPandaCss", () => {
  it("runs codegen, writes the internal css runtime and aliases it", async () => {
    const config = await withPandaCss({}, { cwd })("phase-production-build", { defaultConfig: {} })
    const alias = config.turbopack?.resolveAlias?.[INTERNAL_CSS_IMPORT]

    expect(alias).toMatch(/\.panda\/internal-css\.mjs$/)
    expect(await readFile(join(cwd, ".panda/internal-css.mjs"), "utf8")).toContain("export")
    expect(existsSync(join(cwd, "styled-system/css"))).toBe(true)
  })

  it("keeps existing turbopack rules and aliases", async () => {
    const existing = { loaders: ["./other-loader.cjs"] }
    const config = await withPandaCss(
      { reactStrictMode: true, turbopack: { rules: { "./app/**/*.tsx": existing }, resolveAlias: { foo: "./bar" } } },
      { cwd, include: ["./app/**/*.tsx", "./lib/**/*.ts"] },
    )("phase-production-build", { defaultConfig: {} })

    expect(config.reactStrictMode).toBe(true)
    expect(config.turbopack?.resolveAlias).toMatchObject({ foo: "./bar" })
    expect(config.turbopack?.rules?.["./app/**/*.tsx"]).toEqual([
      createTurbopackRules({ cwd })[DEFAULT_INCLUDE[0]!],
      existing,
    ])
    expect(config.turbopack?.rules?.["./lib/**/*.ts"]).toBeDefined()
  })

  it("resolves a config factory", async () => {
    const config = await withPandaCss(() => ({ basePath: "/docs" }), { cwd })("phase-production-build", {
      defaultConfig: {},
    })
    expect(config.basePath).toBe("/docs")
  })
})
