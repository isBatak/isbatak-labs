import { type ResolvedOptions, type SourceryOptions, isEnabled } from "../core/options"
import { prepareOptions } from "../core/prepare"
import { LOADER_PATH } from "./loader-path"

export interface WebpackRule {
  test: RegExp
  exclude: RegExp
  enforce: "pre"
  use: { loader: string; options: ResolvedOptions }[]
}

export interface WebpackConfig {
  module?: { rules?: unknown[] }
}

export function createWebpackRule(options: ResolvedOptions): WebpackRule {
  return {
    test: /\.(jsx|tsx|js|mjs|ts|mts)$/,
    exclude: /node_modules/,
    enforce: "pre",
    use: [{ loader: LOADER_PATH, options }],
  }
}

export function addWebpackRule<T extends WebpackConfig>(config: T, options: ResolvedOptions): T {
  const target: WebpackConfig = config
  target.module ??= {}
  target.module.rules ??= []
  target.module.rules.push(createWebpackRule(options))
  return config
}

export async function withSourceryWebpack<T extends WebpackConfig>(config: T, options: SourceryOptions = {}) {
  if (!isEnabled(options)) return config
  return addWebpackRule(config, await prepareOptions(options))
}
