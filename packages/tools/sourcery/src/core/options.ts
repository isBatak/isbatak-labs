import path from "node:path"
import type { HotKey } from "./hot-keys"
import type { StyledOptions } from "./transform"

export interface SourceryOptions {
  /** Whether sourcery runs. The Next.js adapter turns it on for `next dev`, the others when `NODE_ENV` is `development`. @default in development */
  enabled?: boolean | undefined
  /** Absolute path of the module the browser client is injected into, usually a root client component. */
  injectTo?: string | undefined
  /** Path fragments to skip. `node_modules` is always skipped. */
  exclude?: string[] | undefined
  /** Keys held together to start inspecting. @default ["metaKey", "shiftKey"] on macOS, ["ctrlKey", "shiftKey"] elsewhere */
  hotKeys?: HotKey[] | undefined
  /** Editor to open: a known id (`code`, `cursor`, `zed`, `webstorm`, …), a command or a path. Detected when unset. */
  editor?: string | undefined
  /** First port tried for the local open-in-editor server. @default 5678 */
  port?: number | undefined
  /** Directory source paths are recorded relative to. @default process.cwd() */
  root?: string | undefined
  /** Attribute written on every element. @default "data-sourcery" */
  attribute?: string | undefined
  /** Extra element or component names to leave untagged, on top of `Fragment`, `Suspense`, `script`, `style`, `template` and `slot`. */
  ignoreTags?: string[] | undefined
  /**
   * Also record where Panda CSS `styled()`, `withProvider()`, `withContext()` and `withRootProvider()` components are
   * defined. Hold ⌥ with the hotkeys to open that definition. `modules` lists the import paths treated as Panda's `jsx`
   * entry, matched as suffixes. @default false
   */
  panda?: boolean | { modules?: string[] | undefined } | undefined
}

export interface ResolvedOptions {
  injectTo: string | null
  exclude: string[]
  hotKeys: HotKey[] | null
  editor: string | null
  port: number
  root: string
  attribute: string
  ignoreTags: string[]
  styled: StyledOptions | null
}

export interface ClientOptions {
  port: number
  attribute: string
  styledAttribute: string | null
  hotKeys: HotKey[] | null
}

export function isEnabled(options: SourceryOptions) {
  return options.enabled ?? process.env.NODE_ENV === "development"
}

export function resolveOptions(options: SourceryOptions): ResolvedOptions {
  const attribute = options.attribute ?? "data-sourcery"
  return {
    injectTo: options.injectTo ? normalizePath(path.resolve(options.injectTo)) : null,
    exclude: options.exclude ?? [],
    hotKeys: options.hotKeys ?? null,
    editor: options.editor ?? null,
    port: options.port ?? 5678,
    root: normalizePath(path.resolve(options.root ?? process.cwd())),
    attribute,
    ignoreTags: options.ignoreTags ?? [],
    styled: options.panda
      ? { attribute: `${attribute}-styled`, modules: options.panda === true ? null : (options.panda.modules ?? null) }
      : null,
  }
}

export function getClientOptions(options: ResolvedOptions): ClientOptions {
  return {
    port: options.port,
    attribute: options.attribute,
    styledAttribute: options.styled?.attribute ?? null,
    hotKeys: options.hotKeys,
  }
}

export function normalizePath(file: string) {
  return file.replaceAll("\\", "/")
}

export function isExcluded(file: string, options: ResolvedOptions) {
  const normalized = normalizePath(file)
  return normalized.includes("/node_modules/") || options.exclude.some((fragment) => normalized.includes(fragment))
}
