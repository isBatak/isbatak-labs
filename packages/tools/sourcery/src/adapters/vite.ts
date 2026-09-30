import type { HtmlTagDescriptor, Plugin } from "vite"
import { CLIENT_MODULE } from "../core/inject"
import { transformModule } from "../core/module"
import { type ResolvedOptions, type SourceryOptions, getClientOptions, normalizePath } from "../core/options"
import { prepareOptions } from "../core/prepare"

const SOURCE_ID = /\.(jsx|tsx|js|mjs|ts|mts)(\?|$)/

export function sourcery(options: SourceryOptions = {}): Plugin {
  let resolved: ResolvedOptions | null = null

  return {
    name: "sourcery",
    enforce: "pre",
    apply: (_, env) => options.enabled ?? env.command === "serve",
    async configResolved(config) {
      resolved = await prepareOptions({ ...options, root: options.root ?? config.root })
    },
    transformIndexHtml: {
      order: "pre",
      handler(): HtmlTagDescriptor[] {
        if (!resolved || resolved.injectTo) return []
        const client = JSON.stringify(getClientOptions(resolved))
        return [
          {
            tag: "script",
            attrs: { type: "module" },
            children: `import { startSourcery } from "${CLIENT_MODULE}";startSourcery(${client});`,
            injectTo: "head",
          },
        ]
      },
    },
    transform: {
      filter: { id: SOURCE_ID },
      handler(code, id) {
        if (!resolved || id.startsWith("\0")) return null
        return transformModule(code, normalizePath(id.split("?", 1)[0] ?? id), resolved)
      },
    },
  }
}
