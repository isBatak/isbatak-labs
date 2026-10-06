import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises"
import { tmpdir } from "node:os"
import { join } from "node:path"
import pandaTurbopackLoader, { type LoaderContext } from "../src/loader"

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
  return new Promise<string | undefined>((resolve, reject) => {
    const context: LoaderContext = {
      resourcePath,
      rootContext: cwd,
      getOptions: () => ({}),
      async: () => (error, code) => (error ? reject(error) : resolve(code)),
    }
    pandaTurbopackLoader.call(context, source)
  })
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
})
