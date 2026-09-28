export type HotKey = "altKey" | "ctrlKey" | "metaKey" | "shiftKey"

export const HOT_KEY_LABELS: Record<HotKey, string> = {
  altKey: "⌥",
  ctrlKey: "⌃",
  metaKey: "⌘",
  shiftKey: "⇧",
}

export function getDefaultHotKeys(isMac: boolean): HotKey[] {
  return isMac ? ["metaKey", "shiftKey"] : ["ctrlKey", "shiftKey"]
}

export function formatHotKeys(hotKeys: HotKey[]) {
  return hotKeys.map((key) => HOT_KEY_LABELS[key]).join("")
}
