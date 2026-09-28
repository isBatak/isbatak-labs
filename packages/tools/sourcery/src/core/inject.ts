import type { ClientOptions } from "./options"
import { parseProgram } from "./transform"

export const CLIENT_MODULE = "@isbatak/sourcery/client"

export function injectClient(code: string, file: string, options: ClientOptions) {
  const snippet = `import { startSourcery as __startSourcery } from "${CLIENT_MODULE}";__startSourcery(${JSON.stringify(options)});`
  const directivesEnd = getDirectivesEnd(parseProgram(code, file)?.body ?? [])
  if (directivesEnd == null) return `${snippet}${code}`
  return `${code.slice(0, directivesEnd)};${snippet}${code.slice(directivesEnd)}`
}

function getDirectivesEnd(body: { directive?: unknown; end: number }[]) {
  let end: number | undefined
  for (const node of body) {
    if (typeof node.directive !== "string") break
    end = node.end
  }
  return end
}
