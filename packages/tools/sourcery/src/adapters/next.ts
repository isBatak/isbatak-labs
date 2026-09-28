import type { NextConfig } from "next"
import type { SourceryOptions } from "../core/options"
import { prepareOptions } from "../core/prepare"
import { createTurbopackRules, mergeTurbopackRules } from "./turbopack"
import { addWebpackRule } from "./webpack"

const PHASE_DEVELOPMENT_SERVER = "phase-development-server"

export type NextConfigFactory = (
  phase: string,
  context: { defaultConfig: NextConfig },
) => NextConfig | Promise<NextConfig>

export function withSourcery(
  nextConfig: NextConfig | NextConfigFactory = {},
  options: SourceryOptions = {},
): NextConfigFactory {
  return async (phase, context) => {
    const config = typeof nextConfig === "function" ? await nextConfig(phase, context) : nextConfig
    if (!(options.enabled ?? phase === PHASE_DEVELOPMENT_SERVER)) return config

    const resolved = await prepareOptions(options)
    const rules = mergeTurbopackRules(config.turbopack?.rules, createTurbopackRules(resolved))
    const turbopack = { ...config.turbopack, rules } as NonNullable<NextConfig["turbopack"]>

    if (process.env.TURBOPACK) return { ...config, turbopack }

    return {
      ...config,
      turbopack,
      webpack(webpackConfig, webpackContext) {
        const result = config.webpack ? config.webpack(webpackConfig, webpackContext) : webpackConfig
        return webpackContext.dev ? addWebpackRule(result, resolved) : result
      },
    }
  }
}
