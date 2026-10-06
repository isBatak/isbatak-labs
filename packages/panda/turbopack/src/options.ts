export interface PandaLoaderOptions {
  /** Project root the Panda config is discovered from. Defaults to the loader's `rootContext`. */
  cwd?: string | undefined
  /** Explicit config file, relative to `cwd`. Otherwise discovered upward. */
  configPath?: string | undefined
}

export interface PandaTurbopackOptions extends PandaLoaderOptions {
  /** Turbopack rule globs the loader runs on. Defaults to every JS/TS module outside `node_modules`. */
  include?: string[] | undefined
}

export function loaderOptions({ cwd, configPath }: PandaLoaderOptions): PandaLoaderOptions {
  return {
    ...(cwd !== undefined && { cwd }),
    ...(configPath !== undefined && { configPath }),
  }
}
