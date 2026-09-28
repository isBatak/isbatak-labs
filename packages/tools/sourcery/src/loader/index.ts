import { injectClient } from "../core/inject"
import { type ResolvedOptions, getClientOptions, isExcluded, normalizePath } from "../core/options"
import { transformJsx } from "../core/transform"

export interface LoaderContext {
  resourcePath: string
  getOptions(): ResolvedOptions
  callback(error: Error | null, code?: string, map?: unknown): void
  cacheable?(flag?: boolean): void
}

export default function sourceryLoader(this: LoaderContext, code: string, map?: unknown) {
  this.cacheable?.(true)
  const options = this.getOptions()
  const file = normalizePath(this.resourcePath)

  if (isExcluded(file, options)) {
    this.callback(null, code, map)
    return
  }

  const source = file === options.injectTo ? injectClient(code, file, getClientOptions(options)) : code
  const result = transformJsx({
    code: source,
    file,
    root: options.root,
    attribute: options.attribute,
    ignoreTags: options.ignoreTags,
    styled: options.styled,
  })
  this.callback(null, result?.code ?? source, result?.map ?? map)
}
