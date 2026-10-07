import { mkdir, readFile, writeFile } from "node:fs/promises"
import { createRequire } from "node:module"
import { dirname, join } from "node:path"
import { createNodeDriver } from "@pandacss/compiler"
import { INTERNAL_CSS_IMPORT, getInternalCssRuntimeSource, resolveCxSeparator } from "@pandacss/transformer"
import { type PandaLoaderOptions, type PandaTurbopackOptions, loaderOptions } from "./options"

export type { PandaLoaderOptions, PandaTurbopackOptions } from "./options"
export { INTERNAL_CSS_IMPORT }

export const LOADER_PATH = createRequire(import.meta.url).resolve("@isbatak/panda-turbopack/loader")
export const DEFAULT_INCLUDE = ["*.{jsx,tsx,js,mjs,ts,mts}"]
export const CSS_GLOB = "*.css"
export const INTERNAL_CSS_OUTFILE = ".panda/internal-css.mjs"

export interface TurbopackRule {
  condition: unknown
  loaders: { loader: string; options: PandaLoaderOptions }[]
}

export function createTurbopackRules(options: PandaTurbopackOptions = {}): Record<string, TurbopackRule> {
  const rule: TurbopackRule = {
    condition: { not: "foreign" },
    loaders: [{ loader: LOADER_PATH, options: loaderOptions(options) }],
  }
  return Object.fromEntries([...(options.include ?? DEFAULT_INCLUDE), CSS_GLOB].map((glob) => [glob, rule]))
}

export function mergeTurbopackRules(rules: Record<string, unknown> | undefined, added: Record<string, TurbopackRule>) {
  const merged: Record<string, unknown> = { ...added }
  for (const [glob, rule] of Object.entries(rules ?? {})) {
    const existing = merged[glob]
    merged[glob] = existing ? [existing, rule].flat() : rule
  }
  return merged
}

export async function codegen({ cwd = process.cwd(), configPath }: PandaLoaderOptions = {}) {
  const driver = await createNodeDriver({ cwd, ...(configPath !== undefined && { configPath }) })
  driver.codegen({ cwd })

  const source = getInternalCssRuntimeSource(resolveCxSeparator(driver.config as Record<string, unknown>))
  const outfile = join(cwd, INTERNAL_CSS_OUTFILE)
  const current = await readFile(outfile, "utf8").catch(() => undefined)
  if (current !== source) {
    await mkdir(dirname(outfile), { recursive: true })
    await writeFile(outfile, source)
  }
  return { outfile }
}
