import { transformModule } from "../core/module"
import { type ResolvedOptions, normalizePath } from "../core/options"

export interface LoaderContext {
  resourcePath: string
  getOptions(): ResolvedOptions
  callback(error: Error | null, code?: string, map?: unknown): void
  cacheable?(flag?: boolean): void
}

export default function sourceryLoader(this: LoaderContext, code: string, map?: unknown) {
  this.cacheable?.(true)
  const result = transformModule(code, normalizePath(this.resourcePath), this.getOptions())
  this.callback(null, result?.code ?? code, result?.map ?? map)
}
