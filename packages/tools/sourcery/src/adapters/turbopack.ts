import type { ResolvedOptions } from "../core/options"
import { LOADER_PATH } from "./loader-path"

export const TURBOPACK_GLOB = "*.{jsx,tsx,js,mjs,ts,mts}"

export interface TurbopackRule {
  condition: unknown
  loaders: { loader: string; options: Record<string, unknown> }[]
}

export function createTurbopackRules(options: ResolvedOptions): Record<string, TurbopackRule> {
  return {
    [TURBOPACK_GLOB]: {
      condition: { all: ["development", { not: "foreign" }] },
      loaders: [{ loader: LOADER_PATH, options: { ...options } }],
    },
  }
}

export function mergeTurbopackRules(rules: Record<string, unknown> | undefined, added: Record<string, TurbopackRule>) {
  const merged: Record<string, unknown> = { ...added }
  for (const [glob, rule] of Object.entries(rules ?? {})) {
    const existing = merged[glob]
    merged[glob] = existing ? [existing, rule].flat() : rule
  }
  return merged
}
