import type { Diagnostic } from "@pandacss/compiler-shared"
import type { PandaLoaderOptions } from "./options"
import { type PandaProject, loadProject } from "./project"

export interface LoaderContext {
  resourcePath: string
  rootContext: string
  getOptions(): PandaLoaderOptions
  async(): (error: Error | null, code?: string, map?: unknown) => void
  addDependency(file: string): void
  addContextDependency(dir: string): void
  emitWarning(error: Error): void
}

export default function pandaTurbopackLoader(this: LoaderContext, source: string, map?: unknown) {
  const callback = this.async()
  const { cwd = this.rootContext, configPath } = this.getOptions()

  if (this.resourcePath.endsWith(".css")) {
    if (!source.includes("@layer")) return callback(null, source, map)
    loadProject(cwd, configPath)
      .then((project) => injectCss(this, project, source))
      .then((css) => callback(null, css))
      .catch(callback)
    return
  }

  transformScript(this.resourcePath, source, cwd, configPath)
    .then((result) => callback(null, result?.code ?? source, result?.map ?? map))
    .catch(callback)
}

async function transformScript(path: string, source: string, cwd: string, configPath: string | undefined) {
  const { shouldTransform, transformSource } = await import("@pandacss/transformer")
  if (!shouldTransform(path)) return
  const project = await loadProject(cwd, configPath)
  const result = transformSource({ path, source, compiler: await project.compiler() })
  if (!result.changed) return
  return { code: result.code, map: result.map ?? undefined }
}

async function injectCss(loader: LoaderContext, project: PandaProject, source: string) {
  const { driver } = project
  if (!driver.compiler.hasLayerDeclaration(source)) return source

  const designSystemChanged = await project.syncCss().finally(() => addDependencies(loader, project))
  const { formatDiagnostic, withDiagnosticFile } = await import("@pandacss/compiler-shared")
  const warn = (diagnostics: readonly Diagnostic[] | undefined, context: string) => {
    if (!diagnostics?.length) return
    const shown = diagnostics
      .slice(0, 3)
      .map((diagnostic) => formatDiagnostic(withDiagnosticFile(diagnostic)))
      .join("\n")
    const hidden = diagnostics.length > 3 ? `\n...and ${diagnostics.length - 3} more` : ""
    loader.emitWarning(new Error(`panda: ${diagnostics.length} diagnostic(s) ${context}\n${shown}${hidden}`))
  }

  if (designSystemChanged) warn(driver.designSystemDiagnostics, "while loading the design system")

  const polyfill = driver.config.polyfill === true
  const output = driver.cssgen({ emitLayerDeclaration: false, polyfill })
  warn(output.diagnostics, "while compiling the stylesheet")

  const entry = polyfill ? driver.compiler.stripLayerOrderStatements(source) : source
  return `${entry}\n${output.css}`
}

function addDependencies(loader: LoaderContext, project: PandaProject) {
  const files = new Set([...project.sourceFiles(), ...project.configFiles(), ...project.designSystemFiles()])
  for (const file of files) loader.addDependency(file)
  for (const dir of project.sourceDirs()) loader.addContextDependency(dir)
}
