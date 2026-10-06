import type { createNodeDriver } from "@pandacss/compiler"
import type { PandaLoaderOptions } from "./options"

type Compiler = Awaited<ReturnType<typeof createNodeDriver>>["compiler"]

export interface LoaderContext {
  resourcePath: string
  rootContext: string
  getOptions(): PandaLoaderOptions
  async(): (error: Error | null, code?: string, map?: unknown) => void
}

const compilers = new Map<string, Promise<Compiler>>()

function getCompiler(cwd: string, configPath: string | undefined) {
  const key = `${cwd}\0${configPath ?? ""}`
  let compiler = compilers.get(key)
  if (!compiler) {
    compiler = import("@pandacss/compiler")
      .then(async ({ createNodeDriver }) => {
        const driver = await createNodeDriver({ cwd, ...(configPath !== undefined && { configPath }) })
        return driver.compiler
      })
      .catch((error: unknown) => {
        compilers.delete(key)
        throw error
      })
    compilers.set(key, compiler)
  }
  return compiler
}

export default function pandaTurbopackLoader(this: LoaderContext, source: string, map?: unknown) {
  const callback = this.async()
  const path = this.resourcePath
  const { cwd = this.rootContext, configPath } = this.getOptions()

  import("@pandacss/transformer")
    .then(async ({ shouldTransform, transformSource }) => {
      if (!shouldTransform(path)) return callback(null, source, map)
      const result = transformSource({ path, source, compiler: await getCompiler(cwd, configPath) })
      if (!result.changed) return callback(null, source, map)
      callback(null, result.code, result.map ?? undefined)
    })
    .catch(callback)
}
