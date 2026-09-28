import { detectEditor } from "../src/core/editor/detect"
import { findEditor, getArguments, getEditorUrl } from "../src/core/editor/editors"

const location = { file: "/work/my app/page.tsx", line: 12, column: 5 }
const none = () => []

describe("detectEditor", () => {
  test("uses the requested editor first", () => {
    expect(detectEditor({ preferred: "cursor", env: {}, listProcesses: none })?.command).toBe("cursor")
    expect(detectEditor({ env: { SOURCERY_EDITOR: "zed" }, listProcesses: none })?.editor?.id).toBe("zed")
    expect(detectEditor({ preferred: "/opt/bin/code", env: {}, listProcesses: none })).toEqual({
      editor: findEditor("code"),
      command: "/opt/bin/code",
    })
  })

  test("reads the editor the dev server was started from", () => {
    expect(detectEditor({ env: { __CFBundleIdentifier: "dev.zed.Zed" }, listProcesses: none })?.editor?.id).toBe("zed")
    const cursorTerminal = {
      TERM_PROGRAM: "vscode",
      VSCODE_GIT_ASKPASS_NODE:
        "/Applications/Cursor.app/Contents/Frameworks/Cursor Helper (Plugin).app/Contents/MacOS/Cursor Helper",
    }
    expect(detectEditor({ env: cursorTerminal, listProcesses: none })?.editor?.id).toBe("cursor")
    expect(detectEditor({ env: { TERM_PROGRAM: "vscode" }, listProcesses: none })?.editor?.id).toBe("code")
  })

  test("falls back to running apps, then VISUAL and EDITOR", () => {
    const mac = () => ["/Applications/WebStorm.app/Contents/MacOS/webstorm", "/usr/sbin/cfprefsd"]
    expect(detectEditor({ env: {}, platform: "darwin", listProcesses: mac })?.editor?.id).toBe("webstorm")
    expect(detectEditor({ env: {}, platform: "linux", listProcesses: () => ["bash", "code"] })?.editor?.id).toBe("code")
    expect(detectEditor({ env: {}, platform: "win32", listProcesses: () => ["Cursor.exe"] })?.editor?.id).toBe("cursor")
    expect(detectEditor({ env: { EDITOR: "vim" }, listProcesses: none })).toEqual({ editor: null, command: "vim" })
    expect(detectEditor({ env: {}, listProcesses: none })).toBeNull()
  })
})

describe("editor arguments", () => {
  test("formats each argument style", () => {
    expect(getArguments("goto", location)).toEqual(["--goto", "/work/my app/page.tsx:12:5"])
    expect(getArguments("line-column", location)).toEqual(["--line", "12", "--column", "5", "/work/my app/page.tsx"])
    expect(getArguments("location", location)).toEqual(["/work/my app/page.tsx:12:5"])
  })

  test("builds URL scheme links for editors that have one", () => {
    const code = findEditor("code")
    const webstorm = findEditor("webstorm")
    expect(code && getEditorUrl(code, location)).toBe("vscode://file/work/my%20app/page.tsx:12:5")
    expect(webstorm && getEditorUrl(webstorm, location)).toBeNull()
  })
})
