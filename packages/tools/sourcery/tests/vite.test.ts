import type { HtmlTagDescriptor } from "vite"
import { sourcery } from "../src/adapters/vite"
import type { SourceryOptions } from "../src/core/options"

vi.mock("../src/core/server", () => ({ startServer: async () => 5678 }))

interface Hooks {
  apply: (config: object, env: { command: "serve" | "build" }) => boolean
  configResolved: (config: { root: string }) => Promise<void>
  transformIndexHtml: { handler: () => HtmlTagDescriptor[] }
  transform: { order: string; handler: (code: string, id: string) => { code: string } | null }
}

async function setup(options: SourceryOptions = {}) {
  const plugin = sourcery(options) as unknown as Hooks
  await plugin.configResolved({ root: "/project" })
  return plugin
}

describe("sourcery vite plugin", () => {
  test("runs for the dev server unless enabled says otherwise", () => {
    const plugin = sourcery() as unknown as Hooks
    expect(plugin.apply({}, { command: "serve" })).toBe(true)
    expect(plugin.apply({}, { command: "build" })).toBe(false)
    expect((sourcery({ enabled: true }) as unknown as Hooks).apply({}, { command: "build" })).toBe(true)
    expect((sourcery({ enabled: false }) as unknown as Hooks).apply({}, { command: "serve" })).toBe(false)
  })

  test("transforms before other plugins so positions match the source", () => {
    expect((sourcery() as unknown as Hooks).transform.order).toBe("pre")
  })

  test("tags JSX relative to the Vite root and ignores the query", async () => {
    const plugin = await setup()
    expect(plugin.transform.handler(`const a = <b />`, "/project/src/app.tsx?v=123")?.code).toBe(
      `const a = <b data-sourcery="src/app.tsx:1:11" />`,
    )
  })

  test("skips node_modules and virtual modules", async () => {
    const plugin = await setup()
    expect(plugin.transform.handler(`const a = <b />`, "/project/node_modules/x/index.jsx")).toBeNull()
    expect(plugin.transform.handler(`const a = <b />`, "\0virtual.tsx")).toBeNull()
  })

  test("adds the client to index.html", async () => {
    const [tag] = (await setup()).transformIndexHtml.handler()
    expect(tag?.children).toBe(
      `import { startSourcery } from "@isbatak/sourcery/client";startSourcery({"port":5678,"attribute":"data-sourcery","styledAttribute":null,"hotKeys":null});`,
    )
  })

  test("adds the client to injectTo instead of index.html", async () => {
    const plugin = await setup({ injectTo: "/project/src/entry.ts" })
    expect(plugin.transformIndexHtml.handler()).toEqual([])
    expect(plugin.transform.handler(`export const a = 1`, "/project/src/entry.ts")?.code).toContain(
      `import { startSourcery as __startSourcery } from "@isbatak/sourcery/client"`,
    )
  })
})
