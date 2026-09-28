import { execFileSync } from "node:child_process"
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

  const editor = fromEnvironment(env)
  if (editor) return { editor, command: editor.cli }

  const running = fromProcesses(listProcesses(), platform)
  if (running) return running

  const fallback = env.VISUAL ?? env.EDITOR
  return fallback ? toTarget(fallback) : null
}

function toTarget(name: string): EditorTarget {
  const editor = matchEditor(getBaseName(name))
  return { editor, command: editor && !/[\\/]/.test(name) ? editor.cli : name }
}

function fromEnvironment(env: Environment) {
  const bundleId = env.__CFBundleIdentifier
  const byBundle = bundleId ? EDITORS.find((editor) => editor.bundleIds?.includes(bundleId)) : undefined
  if (byBundle) return byBundle
  if (env.TERM_PROGRAM !== "vscode") return null

  const hints = [env.VSCODE_GIT_ASKPASS_NODE, env.VSCODE_GIT_ASKPASS_MAIN, env.GIT_ASKPASS].filter(Boolean).join("/")
  const segments = hints.split(/[\\/]/).map(normalizeName)
  const fork = EDITORS.find(
    (editor) =>
      editor.style === "goto" && editor.id !== "code" && getNames(editor).some((name) => segments.includes(name)),
  )
  return fork ?? findEditor("code")
}

function fromProcesses(processes: string[], platform: NodeJS.Platform): EditorTarget | null {
  for (const editor of EDITORS) {
    const names = getNames(editor)
    const match = processes.find((line) => {
      if (platform === "darwin") return Boolean(editor.app) && line.includes(`/${editor.app}.app/Contents/MacOS/`)
      return names.includes(normalizeName(getBaseName(line)))
    })
    if (match) return { editor, command: platform === "win32" ? match : editor.cli }
  }
  return null
}

function matchEditor(name: string) {
  const normalized = normalizeName(name)
  return EDITORS.find((editor) => getNames(editor).includes(normalized)) ?? null
}

function getNames(editor: Editor) {
  return [editor.id, editor.cli, editor.app].filter((name) => name !== undefined).map(normalizeName)
}

function getBaseName(file: string) {
  return file.split(/[\\/]/).at(-1) ?? file
}

function normalizeName(name: string) {
  return name
    .replace(/\.(app|exe|cmd|bat|sh)$/i, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .replace(/64$/, "")
}

function readProcesses(platform: NodeJS.Platform) {
  try {
    const output =
      platform === "win32"
        ? execFileSync(
            "powershell",
            [
              "-NoProfile",
              "-NonInteractive",
              "-Command",
              "Get-CimInstance Win32_Process | ForEach-Object ExecutablePath",
            ],
            { encoding: "utf8", windowsHide: true },
          )
        : execFileSync("ps", platform === "darwin" ? ["-axo", "comm="] : ["-eo", "comm="], { encoding: "utf8" })
    return output
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean)
  } catch {
    return []
  }
}
