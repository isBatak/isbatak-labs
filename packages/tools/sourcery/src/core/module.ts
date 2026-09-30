import { injectClient } from "./inject"
import { type ResolvedOptions, getClientOptions, isExcluded } from "./options"
import { type TransformOutput, transformJsx } from "./transform"

export function transformModule(
  code: string,
  file: string,
  options: ResolvedOptions,
): TransformOutput | { code: string; map: null } | null {
  if (isExcluded(file, options)) return null
  const source = file === options.injectTo ? injectClient(code, file, getClientOptions(options)) : code
  const result = transformJsx({
    code: source,
    file,
    root: options.root,
    attribute: options.attribute,
    ignoreTags: options.ignoreTags,
    styled: options.styled,
  })
  if (result) return result
  return source === code ? null : { code: source, map: null }
}
