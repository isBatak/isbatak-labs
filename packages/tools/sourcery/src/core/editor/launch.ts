import { spawn } from "node:child_process"
import { styleText } from "node:util"
import { type EditorTarget, detectEditor } from "./detect"
import { type Location, getArguments, getEditorUrl } from "./editors"

export function launchEditor(location: Location, preferred: string | null) {
  const target = detectEditor({ preferred })
  if (!target) {
    warn(`could not tell which editor to open ${location.file} in.`)
    return
  }

  const url = process.platform === "darwin" && target.editor ? getEditorUrl(target.editor, location) : null
  if (url) {
    run("open", [url], () => openWithCli(target, location))
    return
  }

  openWithCli(target, location)
}

function openWithCli(target: EditorTarget, location: Location) {
  const args = getArguments(target.editor?.style ?? "location", location)
  run(target.command, args, () => {
    const app = target.editor?.app
    if (process.platform === "darwin" && app) run("open", ["-na", app, "--args", ...args], () => report(target))
    else report(target)
  })
}

function run(command: string, args: string[], onFailure: () => void) {
  const env: NodeJS.ProcessEnv = { ...process.env, NODE_OPTIONS: "" }
  delete env.ELECTRON_RUN_AS_NODE

  const windows = process.platform === "win32"
  const child = spawn(windows ? quote(command) : command, windows ? args.map(quote) : args, {
    env,
    stdio: "ignore",
    shell: windows,
    windowsHide: true,
  })
  let failed = false
  const fail = () => {
    if (failed) return
    failed = true
    onFailure()
  }
  child.once("error", fail)
  child.once("exit", (code) => {
    if (code) fail()
  })
  child.unref()
}

function quote(value: string) {
  return `"${value.replaceAll('"', '\\"')}"`
}

function report(target: EditorTarget) {
  warn(`could not open ${target.command}.`)
}

function warn(message: string) {
  console.warn(
    `${styleText("yellow", "sourcery")} ${message} Set the \`editor\` option or the SOURCERY_EDITOR environment variable, for example SOURCERY_EDITOR=code.`,
  )
}
