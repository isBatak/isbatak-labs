import { mkdtempSync, readFileSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"

import { readPresetOptions, writeEditsToSource } from "../cli/source-writer.mjs"

function project() {
  const root = mkdtempSync(join(tmpdir(), "studio-source-"))
  writeFileSync(join(root, "panda.config.ts"), "export default {}\n")
  writeFileSync(
    join(root, "shadows.ts"),
    `import { defineSemanticTokens } from "@pandacss/dev"

export const shadows = defineSemanticTokens.shadows({
  xs: { value: "0 1px 2px {colors.black/10}" },
  md: { value: { base: "0 4px 8px {colors.black/10}", _dark: "0 4px 8px {colors.black/50}" } },
})
`,
  )
  writeFileSync(
    join(root, "button.ts"),
    `import { defineRecipe } from "@pandacss/dev"

const size = { h: "10" }

export const buttonRecipe = defineRecipe({
  className: "button",
  base: {
    gap: "2",
    _disabled: {
      opacity: "0.5",
    },
  },
  variants: { size: { md: size } },
})
`,
  )
  return root
}

const run = (root: string, edits: unknown[]) => {
  const result = writeEditsToSource({
    projectRoot: root,
    designSystem: "none",
    configPath: join(root, "panda.config.ts"),
    edits,
  })
  result.commit()
  return result
}

describe("source writer", () => {
  test("rewrites semantic token values and splits a plain value into light and dark", () => {
    const root = project()
    const result = run(root, [
      { key: "a", type: "semantic", category: "shadows", path: ["md", "value"], mode: "_dark", value: "none" },
      {
        key: "b",
        type: "semantic",
        category: "shadows",
        path: ["xs", "value"],
        mode: "_dark",
        value: "0 1px 2px {colors.black/40}",
      },
    ])
    const code = readFileSync(join(root, "shadows.ts"), "utf8")
    expect(result.skipped).toEqual([])
    expect(code).toContain(`_dark: "none"`)
    expect(code).toContain(
      `xs: { value: { base: "0 1px 2px {colors.black/10}", _dark: "0 1px 2px {colors.black/40}" } }`,
    )
  })

  test("updates and inserts recipe styles, and skips computed values", () => {
    const root = project()
    const result = run(root, [
      { key: "gap", type: "recipe", className: "button", path: ["base", "gap"], value: "3" },
      { key: "hover", type: "recipe", className: "button", path: ["base", "_hover", "opacity"], value: "0.9" },
      { key: "size", type: "recipe", className: "button", path: ["variants", "size", "md", "h"], value: "12" },
    ])
    const code = readFileSync(join(root, "button.ts"), "utf8")
    expect(code).toContain(`gap: "3"`)
    expect(code).toContain(`    _disabled: {
      opacity: "0.5",
    },
    _hover: { opacity: "0.9" },`)
    expect(result.skipped).toEqual([{ key: "size", reason: "computed value" }])
  })

  test("reads preset options from the call and writes edited ones back", () => {
    const root = project()
    const options = { projectRoot: root, designSystem: "none", configPath: join(root, "panda.config.ts") }
    writeFileSync(
      join(root, "theme.ts"),
      `import { grainTheme } from "grain"

const strength = 1

export const grain = grainTheme({
  frequency: 0.6,
  light: { white: 2 },
  dark: { white: strength },
})
`,
    )
    expect(readPresetOptions({ ...options, packageName: "grain" })).toEqual({
      file: join(root, "theme.ts"),
      options: { frequency: 0.6, "light.white": 2 },
    })

    const result = run(root, [
      {
        key: "preset:grain",
        type: "preset",
        package: "grain",
        options: { frequency: 1, "light.white": 2.5, "light.black": 0.3, size: 256 },
      },
      { key: "computed", type: "preset", package: "grain", options: { "dark.white": 0.5 } },
    ])
    const code = readFileSync(join(root, "theme.ts"), "utf8")
    expect(code).toContain(`grainTheme({
  frequency: 1,
  light: { white: 2.5, black: 0.3 },
  dark: { white: strength },
  size: 256,
})`)
    expect(result.skipped).toEqual([{ key: "computed", reason: "computed value" }])
  })

  test("writes compound variant edits into a matching entry or a new one", () => {
    const root = project()
    const compound = (key: string, values: Record<string, string | boolean>, path: string[], value: string) => ({
      key,
      type: "recipe",
      className: "button",
      path,
      value,
      compound: values,
    })
    run(root, [compound("a", { variant: "ghost", size: "sm" }, ["_hover", "px"], "3")])
    expect(readFileSync(join(root, "button.ts"), "utf8")).toContain(
      `compoundVariants: [{ variant: "ghost", size: "sm", css: { _hover: { px: "3" } } }]`,
    )
    run(root, [
      compound("b", { variant: "ghost", size: "sm" }, ["_hover", "px"], "4"),
      compound("c", { variant: "ghost", size: "sm" }, ["gap"], "1"),
      compound("d", { variant: "solid", icon: true }, ["h"], "8"),
    ])
    expect(readFileSync(join(root, "button.ts"), "utf8")).toContain(
      `compoundVariants: [{ variant: "ghost", size: "sm", css: { _hover: { px: "4" }, gap: "1" } }, { variant: "solid", icon: true, css: { h: "8" } }]`,
    )
  })

  test("adds options to a preset call without arguments", () => {
    const root = project()
    writeFileSync(join(root, "theme.ts"), `import { grainTheme } from "grain"\n\nexport const grain = grainTheme()\n`)
    run(root, [{ key: "preset:grain", type: "preset", package: "grain", options: { "dark.black": 1.4 } }])
    expect(readFileSync(join(root, "theme.ts"), "utf8")).toContain(`grainTheme({ dark: { black: 1.4 } })`)
  })
})
