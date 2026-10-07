import { statSync } from "node:fs"
import type { NodeDriver } from "@pandacss/compiler"

export class PandaProject {
  readonly #mtimes = new Map<string, number>()
  #sources = new Set<string>()
  #parsed = false
  #configChanged = false

  constructor(
    readonly driver: NodeDriver,
    readonly cwd: string,
  ) {
    for (const file of this.configFiles()) this.#touched(file)
  }

  configFiles() {
    const files = this.driver.watchTargets().config.map((file) => this.driver.resolvePath(file))
    return this.driver.configPath ? [this.driver.configPath, ...files] : files
  }

  designSystemFiles() {
    return this.driver
      .designSystemWatchTargets()
      .flatMap((target) => [target.manifestPath, target.buildInfoPath, target.presetPath, ...target.sourceFiles])
  }

  sourceDirs() {
    return this.driver.watchTargets().dirs.map((dir) => this.driver.resolvePath(dir))
  }

  sourceFiles() {
    return [...this.#sources]
  }

  async compiler() {
    await this.#syncConfig()
    return this.driver.compiler
  }

  async syncCss() {
    await this.#syncConfig()

    if (this.#configChanged) {
      this.#configChanged = false
      this.driver.codegen({ cwd: this.cwd })
      this.#parsed = false
    }

    if (!this.#parsed) {
      this.driver.parseFiles()
      this.#sources = new Set(this.driver.scan())
      for (const file of [...this.#sources, ...this.designSystemFiles()]) this.#touched(file)
      this.#parsed = true
      return true
    }

    let designSystemChanged = false
    for (const file of this.designSystemFiles()) {
      if (this.#touched(file) && (await this.driver.syncDesignSystemFileChange({ path: file, kind: "change" }))) {
        designSystemChanged = true
      }
    }

    const current = new Set(this.driver.scan())
    for (const file of this.#sources) {
      if (current.has(file)) continue
      this.driver.applyChange({ path: file, kind: "unlink" })
      this.#mtimes.delete(file)
    }
    for (const file of current) {
      if (!this.#sources.has(file)) {
        this.#touched(file)
        this.driver.applyChange({ path: file, kind: "add" })
      } else if (this.#touched(file)) {
        this.driver.applyChange({ path: file, kind: "change" })
      }
    }
    this.#sources = current

    return designSystemChanged
  }

  async #syncConfig() {
    const touched = this.configFiles().filter((file) => this.#touched(file))
    if (!touched.length) return
    const diff = await this.driver.reload()
    if (diff.hasChanged) this.#configChanged = true
  }

  #touched(file: string) {
    const mtime = statSync(file, { throwIfNoEntry: false })?.mtimeMs ?? -1
    const previous = this.#mtimes.get(file)
    this.#mtimes.set(file, mtime)
    return previous !== undefined && previous !== mtime
  }
}

const projects = new Map<string, Promise<PandaProject>>()

export function loadProject(cwd: string, configPath: string | undefined) {
  const key = `${cwd}\0${configPath ?? ""}`
  let project = projects.get(key)
  if (!project) {
    project = import("@pandacss/compiler")
      .then(async ({ createNodeDriver }) => {
        const driver = await createNodeDriver({ cwd, ...(configPath !== undefined && { configPath }) })
        return new PandaProject(driver, cwd)
      })
      .catch((error: unknown) => {
        projects.delete(key)
        throw error
      })
    projects.set(key, project)
  }
  return project
}
