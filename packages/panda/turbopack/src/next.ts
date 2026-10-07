import { relative, sep } from "node:path"
import type { NextConfig } from "next"
import { INTERNAL_CSS_IMPORT, codegen, createTurbopackRules, mergeTurbopackRules } from "./index"
import type { PandaTurbopackOptions } from "./options"

export type NextConfigFactory = (
  phase: string,
  context: { defaultConfig: NextConfig },
) => NextConfig | Promise<NextConfig>

export function withPandaCss(
  nextConfig: NextConfig | NextConfigFactory = {},
  options: PandaTurbopackOptions = {},
): NextConfigFactory {
  return async (phase, context) => {
    const config = typeof nextConfig === "function" ? await nextConfig(phase, context) : nextConfig
    const cwd = options.cwd ?? process.cwd()
    const { outfile } = await codegen({ ...options, cwd })

    const turbopack = {
      ...config.turbopack,
      rules: mergeTurbopackRules(config.turbopack?.rules, createTurbopackRules({ ...options, cwd })),
      resolveAlias: {
        ...config.turbopack?.resolveAlias,
        [INTERNAL_CSS_IMPORT]: `./${relative(process.cwd(), outfile).split(sep).join("/")}`,
      },
    } as NonNullable<NextConfig["turbopack"]>

    return { ...config, turbopack }
  }
}

export default withPandaCss
