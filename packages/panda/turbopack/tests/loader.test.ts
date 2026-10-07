import { mkdir, mkdtemp, rm, utimes, writeFile } from "node:fs/promises"
import { tmpdir } from "node:os"
import { join } from "node:path"
import pandaTurbopackLoader, { type LoaderContext } from "../src/loader"

const LAYERS = "@layer reset, base, tokens, recipes, utilities;"

let cwd: string

beforeEach(async () => {
  cwd = await mkdtemp(join(tmpdir(), "panda-turbopack-"))
  await mkdir(join(cwd, "src"))
  await writeFile(
    join(cwd, "panda.config.mjs"),
    `export default { include: ["./src/**/*.tsx"], outdir: "styled-system", utilities: { color: { className: "c" } } }`,
  )
})

afterEach(async () => {
  await rm(cwd, { recursive: true, force: true })
})

function runLoader(resourcePath: string, source: string) {
  const dependencies: string[] = []
  const contextDependencies: string[] = []
  const code = new Promise<string | undefined>((resolve, reject) => {
    const context: LoaderContext = {
      resourcePath,
      rootContext: cwd,
      getOptions: () => ({}),
      async: () => (error, code) => (error ? reject(error) : resolve(code)),
      addDependency: (file) => dependencies.push(file),
      addContextDependency: (dir) => contextDependencies.push(dir),
      emitWarning: () => {},
    }
    pandaTurbopackLoader.call(context, source)
  })
  return Object.assign(code, { dependencies, contextDependencies })
}

describe("pandaTurbopackLoader", () => {
  it("rewrites css() calls into class names", async () => {
    const source = `import { css } from "styled-system/css"\nexport const box = css({ color: "red", padding: "4" })\n`
    const code = await runLoader(join(cwd, "src/box.tsx"), source)

    expect(code).not.toContain("css({")
    expect(code).toContain(`"c_red padding_4"`)
  })

  it("returns modules without Panda calls unchanged", async () => {
    const source = `export const answer = 42\n`
    expect(await runLoader(join(cwd, "src/answer.tsx"), source)).toBe(source)
  })

  it("appends the generated css to a stylesheet that declares the panda layers", async () => {
    await writeFile(join(cwd, "src/box.tsx"), `import { css } from "styled-system/css"\ncss({ color: "red" })\n`)
    const run = runLoader(join(cwd, "src/app.css"), LAYERS)
    const code = await run

    expect(code).toMatch(new RegExp(`^${LAYERS}`))
    expect(code).toContain(".c_red")
    expect(run.dependencies).toContain(join(cwd, "src/box.tsx"))
    expect(run.dependencies).toContain(join(cwd, "panda.config.mjs"))
    expect(run.contextDependencies).toContain(join(cwd, "src"))
  })

  it("picks up edited and new source files on the next run", async () => {
    await writeFile(join(cwd, "src/box.tsx"), `import { css } from "styled-system/css"\ncss({ color: "red" })\n`)
    await runLoader(join(cwd, "src/app.css"), LAYERS)

    await writeFile(join(cwd, "src/box.tsx"), `import { css } from "styled-system/css"\ncss({ color: "blue" })\n`)
    await utimes(join(cwd, "src/box.tsx"), new Date(), new Date(Date.now() + 1000))
    await writeFile(join(cwd, "src/new.tsx"), `import { css } from "styled-system/css"\ncss({ color: "green" })\n`)
    const code = await runLoader(join(cwd, "src/app.css"), LAYERS)

    expect(code).toContain(".c_blue")
    expect(code).toContain(".c_green")
  })

  it("leaves stylesheets without the panda layers untouched", async () => {
    const source = `.card { color: red }\n`
    expect(await runLoader(join(cwd, "src/card.css"), source)).toBe(source)
  })
})
