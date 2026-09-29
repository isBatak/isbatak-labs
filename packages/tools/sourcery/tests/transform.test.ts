import { injectClient } from "../src/core/inject"
import { isExcluded, resolveOptions } from "../src/core/options"
import { transformJsx } from "../src/core/transform"

const root = "/project"
const attribute = "data-sourcery"

function transform(code: string, file = "/project/app/page.tsx") {
  return transformJsx({ code, file, root, attribute })?.code
}

describe("transformJsx", () => {
  test("tags elements with their location at the end of the opening tag", () => {
    const code = `export const Page = () => (\n  <main>\n    <h1 className="title">Hi</h1>\n  </main>\n)`
    expect(transform(code)).toBe(
      `export const Page = () => (\n  <main data-sourcery="app/page.tsx:2:3">\n    <h1 className="title" data-sourcery="app/page.tsx:3:5">Hi</h1>\n  </main>\n)`,
    )
  })

  test("tags components so the attribute reaches the element they render", () => {
    const code = `const a = <><Button {...props} /><Menu.Item/><my-el /></>`
    expect(transform(code)).toBe(
      `const a = <><Button {...props} data-sourcery="app/page.tsx:1:13" /><Menu.Item data-sourcery="app/page.tsx:1:34" /><my-el data-sourcery="app/page.tsx:1:46" /></>`,
    )
  })

  test("skips fragments, suspense and the ignored tags", () => {
    const code = `const a = <React.Fragment><Suspense><script /><Tooltip.Root>x</Tooltip.Root></Suspense></React.Fragment>`
    expect(transformJsx({ code, file: "/project/a.tsx", root, attribute, ignoreTags: ["Root"] })).toBeNull()
  })

  test("skips components that alias Fragment", () => {
    const code = [
      `import { Fragment as F } from "react"`,
      `const Wrapper = tooltip ? Tooltip : React.Fragment`,
      `const Outer = (as ?? Fragment) as ElementType`,
      `const a = <F><Wrapper><Outer><b /></Outer></Wrapper></F>`,
    ].join("\n")
    expect(transform(code)).toBe(code.replace("<b />", `<b data-sourcery="app/page.tsx:4:30" />`))
  })

  test("strips its attributes from props spread onto a fragment", () => {
    const code = `const a = <Fragment {...rest}>{value}</Fragment>`
    const output = transformJsx({
      code,
      file: "/project/a.tsx",
      root,
      attribute,
      styled: { attribute: `${attribute}-styled`, modules: null },
    })?.code
    expect(output).toBe(
      `const a = <Fragment {...(({ "data-sourcery": __sourcery0, "data-sourcery-styled": __sourcery1, ...props }) => props)((rest) ?? {})}>{value}</Fragment>`,
    )
    const spread = output?.slice(output.indexOf("{...") + 4, output.indexOf("}>{")) ?? ""
    const run = new Function("rest", `return ${spread}`)
    expect(run({ "data-sourcery": "x", "data-sourcery-styled": "y", ref: 1 })).toEqual({ ref: 1 })
    expect(run(null)).toEqual({})
  })

  test("keeps an attribute that is already there", () => {
    expect(transform(`const a = <div data-sourcery="x" />`)).toBeUndefined()
  })

  test("counts columns in characters, not bytes", () => {
    expect(transform(`const ž = "čć 😀"; const a = <b />`)).toBe(
      `const ž = "čć 😀"; const a = <b data-sourcery="app/page.tsx:1:30" />`,
    )
  })

  test("parses TypeScript generics in tsx files", () => {
    const code = `function f<T,>(value: T) { return <p>{String(value as unknown)}</p> }`
    expect(transform(code)).toContain(`<p data-sourcery="app/page.tsx:1:35">`)
  })

  test("returns null for files it cannot parse or does not handle", () => {
    expect(transform(`const a = <div`)).toBeUndefined()
    expect(transform(`const a = <div />`, "/project/app/page.ts")).toBeUndefined()
    expect(transform(`const a = 1`)).toBeUndefined()
  })

  test("records paths relative to the root", () => {
    expect(transform(`const a = <i />`, "/elsewhere/lib/icon.jsx")).toContain(
      `data-sourcery="../elsewhere/lib/icon.jsx:1:11"`,
    )
  })
})

describe("injectClient", () => {
  const options = { port: 5678, attribute, styledAttribute: null, hotKeys: null }

  test("injects after directives without adding lines", () => {
    const code = `"use client"\n\nexport function Providers() {}`
    const output = injectClient(code, "/project/providers.tsx", options)
    expect(
      output.startsWith(`"use client";import { startSourcery as __startSourcery } from "@isbatak/sourcery/client";`),
    ).toBe(true)
    expect(output.split("\n")).toHaveLength(code.split("\n").length)
  })

  test("injects at the top when there is no directive", () => {
    const output = injectClient(`export const a = 1`, "/project/entry.ts", options)
    expect(output).toBe(
      `import { startSourcery as __startSourcery } from "@isbatak/sourcery/client";__startSourcery({"port":5678,"attribute":"data-sourcery","styledAttribute":null,"hotKeys":null});export const a = 1`,
    )
  })
})

describe("isExcluded", () => {
  const options = resolveOptions({ root, exclude: ["/packages/"] })

  test("skips node_modules and excluded fragments", () => {
    expect(isExcluded("/project/node_modules/react/index.js", options)).toBe(true)
    expect(isExcluded("/repo/packages/ui/button.tsx", options)).toBe(true)
    expect(isExcluded("/project/app/page.tsx", options)).toBe(false)
  })
})

describe("panda factories", () => {
  const styled = { attribute: "data-sourcery-styled", modules: null }

  function tag(code: string, file = "/project/app/ui.tsx") {
    return transformJsx({ code, file, root, attribute, styled })?.code
  }

  test("adds defaultProps to styled() calls, filling in the missing arguments", () => {
    const code = `import { styled } from "styled-system/jsx"\nexport const Box = styled("div")\nexport const Card = styled("div", card)`
    expect(tag(code, "/project/app/ui.ts")).toBe(
      `import { styled } from "styled-system/jsx"\nexport const Box = styled("div", undefined, { defaultProps: { "data-sourcery-styled": "app/ui.ts:2:20" } })\nexport const Card = styled("div", card, { defaultProps: { "data-sourcery-styled": "app/ui.ts:3:21" } })`,
    )
  })

  test("merges into existing options and defaultProps", () => {
    const code = [
      `import { styled as s } from "@acme/ds/jsx"`,
      `const A = s("a", link, { dataAttr: true })`,
      `const B = s("b", bold, { defaultProps: { role: "note" } })`,
      `const C = s("i", italic, shared)`,
    ].join("\n")
    const output = tag(code) ?? ""
    expect(output).toContain(
      `s("a", link, { defaultProps: { "data-sourcery-styled": "app/ui.tsx:2:11" }, dataAttr: true })`,
    )
    expect(output).toContain(
      `s("b", bold, { defaultProps: { "data-sourcery-styled": "app/ui.tsx:3:11", role: "note" } })`,
    )
    expect(output).toContain(
      `s("i", italic, { ...shared, defaultProps: { ...shared?.defaultProps, "data-sourcery-styled": "app/ui.tsx:4:11" } })`,
    )
  })

  test("tags slot recipe context factories, destructured or not", () => {
    const code = [
      `import { createSlotRecipeContext } from "styled-system/jsx/index.mjs"`,
      `const { withProvider, withContext: consume } = createSlotRecipeContext(hint)`,
      `const Root = withProvider(Popover.Root, "root")`,
      `const Icon = consume("span", "icon", { forwardProps: ["size"] })`,
      `const ctx = createSlotRecipeContext(card)`,
      `const Body = ctx.withRootProvider(Card)`,
    ].join("\n")
    const output = tag(code) ?? ""
    expect(output).toContain(
      `withProvider(Popover.Root, "root", { defaultProps: { "data-sourcery-styled": "app/ui.tsx:3:14" } })`,
    )
    expect(output).toContain(
      `consume("span", "icon", { defaultProps: { "data-sourcery-styled": "app/ui.tsx:4:14" }, forwardProps: ["size"] })`,
    )
    expect(output).toContain(
      `ctx.withRootProvider(Card, { defaultProps: { "data-sourcery-styled": "app/ui.tsx:6:14" } })`,
    )
  })

  test("ignores styled() from other libraries and stays off by default", () => {
    expect(tag(`import styled from "styled-components"\nconst A = styled("div")`, "/project/app/ui.ts")).toBeUndefined()
    const code = `import { styled } from "styled-system/jsx"\nconst A = styled("div")`
    expect(transformJsx({ code, file: "/project/app/ui.ts", root, attribute })).toBeNull()
  })
})
