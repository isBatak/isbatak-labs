export type ArgumentStyle = "goto" | "line-column" | "location"

export interface Editor {
  id: string
  cli: string
  style: ArgumentStyle
  app?: string
  bundleIds?: string[]
  urlScheme?: string
}

export const EDITORS: Editor[] = [
  {
    id: "code",
    cli: "code",
    style: "goto",
    app: "Visual Studio Code",
    bundleIds: ["com.microsoft.VSCode"],
    urlScheme: "vscode",
  },
  {
    id: "code-insiders",
    cli: "code-insiders",
    style: "goto",
    app: "Visual Studio Code - Insiders",
    bundleIds: ["com.microsoft.VSCodeInsiders"],
    urlScheme: "vscode-insiders",
  },
  {
    id: "cursor",
    cli: "cursor",
    style: "goto",
    app: "Cursor",
    bundleIds: ["com.todesktop.230313mzl4w4u92"],
    urlScheme: "cursor",
  },
  {
    id: "windsurf",
    cli: "windsurf",
    style: "goto",
    app: "Windsurf",
    bundleIds: ["com.exafunction.windsurf"],
    urlScheme: "windsurf",
  },
  { id: "codium", cli: "codium", style: "goto", app: "VSCodium", bundleIds: ["com.vscodium"], urlScheme: "vscodium" },
  { id: "zed", cli: "zed", style: "location", app: "Zed", bundleIds: ["dev.zed.Zed"], urlScheme: "zed" },
  { id: "sublime", cli: "subl", style: "location", app: "Sublime Text", bundleIds: ["com.sublimetext.4"] },
  { id: "webstorm", cli: "webstorm", style: "line-column", app: "WebStorm", bundleIds: ["com.jetbrains.WebStorm"] },
  { id: "idea", cli: "idea", style: "line-column", app: "IntelliJ IDEA", bundleIds: ["com.jetbrains.intellij"] },
  { id: "phpstorm", cli: "phpstorm", style: "line-column", app: "PhpStorm", bundleIds: ["com.jetbrains.PhpStorm"] },
  { id: "pycharm", cli: "pycharm", style: "line-column", app: "PyCharm", bundleIds: ["com.jetbrains.pycharm"] },
  { id: "rider", cli: "rider", style: "line-column", app: "Rider", bundleIds: ["com.jetbrains.rider"] },
]

export interface Location {
  file: string
  line: number
  column: number
}

export function getArguments(style: ArgumentStyle, { file, line, column }: Location) {
  if (style === "line-column") return ["--line", String(line), "--column", String(column), file]
  if (style === "goto") return ["--goto", `${file}:${line}:${column}`]
  return [`${file}:${line}:${column}`]
}

export function getEditorUrl(editor: Editor, { file, line, column }: Location) {
  if (!editor.urlScheme) return null
  return `${editor.urlScheme}://file${encodeURI(file.startsWith("/") ? file : `/${file}`)}:${line}:${column}`
}

export function findEditor(name: string) {
  const normalized = name.toLowerCase()
  return EDITORS.find((editor) => editor.id === normalized || editor.cli === normalized) ?? null
}
