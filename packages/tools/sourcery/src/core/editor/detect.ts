import { execFileSync } from "node:child_process"
import path from "node:path"
import { EDITORS, type Editor, findEditor } from "./editors"

export interface EditorTarget {
  editor: Editor | null
  command: string
}

type Environment = Record<string, string | undefined>

export interface DetectOptions {
  preferred?: string | null | undefined
  env?: Environment | undefined
  platform?: NodeJS.Platform | undefined
  listProcesses?: (() => string[]) | undefined
}

export function detectEditor({
  preferred = null,
  env = process.env,
  platform = process.platform,
  listProcesses = () => readProcesses(platform),
}: DetectOptions = {}): EditorTarget | null {
  const requested = preferred ?? env.SOURCERY_EDITOR
  if (requested) return toTarget(requested)

  const editor = fromEnvironment(env) ?? fromProcesses(listProcesses(), platform)
  if (editor) return { editor, command: editor.cli }

  const fallback = env.VISUAL ?? env.EDITOR
  return fallback ? toTarget(fallback) : null
}

function toTarget(name: string): EditorTarget {
  const editor = findEditor(path.basename(name))
  return { editor, command: editor && !name.includes("/") && !name.includes("\\") ? editor.cli : name }
}

function fromEnvironment(env: Environment) {
  const bundleId = env.__CFBundleIdentifier
  const byBundle = bundleId ? EDITORS.find((editor) => editor.bundleIds?.includes(bundleId)) : undefined
  if (byBundle) return byBundle
  if (env.TERM_PROGRAM !== "vscode") return null

  const hint = env.VSCODE_GIT_ASKPASS_NODE ?? env.VSCODE_IPC_HOOK_CLI ?? ""
  const byApp = EDITORS.find((editor) => editor.app && hint.includes(`/${editor.app}.app/`))
  return byApp ?? findEditor("code")
}

function fromProcesses(processes: string[], platform: NodeJS.Platform) {
  const running = (editor: Editor) =>
    processes.some((line) => {
      if (platform === "darwin") return Boolean(editor.app) && line.includes(`/${editor.app}.app/Contents/MacOS/`)
      const name = path.basename(line).toLowerCase()
      if (platform === "win32") return name === `${editor.cli}.exe` || name === `${editor.app?.toLowerCase()}.exe`
      return name === editor.cli
    })
  return EDITORS.find(running) ?? null
}

function readProcesses(platform: NodeJS.Platform) {
  try {
    const output =
      platform === "win32"
        ? execFileSync("tasklist", ["/fo", "csv", "/nh"], { encoding: "utf8" })
        : execFileSync("ps", platform === "darwin" ? ["-axo", "comm="] : ["-eo", "comm="], { encoding: "utf8" })
    return output.split(/\r?\n/).map((line) => line.split('","')[0]?.replace(/^"/, "").trim() ?? "")
  } catch {
    return []
  }
}
