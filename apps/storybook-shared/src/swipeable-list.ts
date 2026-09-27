import { css } from "../styled-system/css/index.js"

export interface Account {
  id: string
  name: string
}

export const initialAccounts: Account[] = [
  { id: "ACC-1815-2048", name: "Ada Lovelace" },
  { id: "ACC-1912-0623", name: "Alan Turing" },
  { id: "ACC-1906-1209", name: "Grace Hopper" },
  { id: "ACC-1930-0511", name: "Edsger Dijkstra" },
  { id: "ACC-1939-1107", name: "Barbara Liskov" },
]

export function formatOpenItem(openItem: { value: string; side: string } | null) {
  return `Open: ${openItem ? `${openItem.value} (${openItem.side})` : "none"}`
}

export async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text)
  } catch {}
}

const icon = (paths: string) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`

export const swipeableListIcons = {
  account: icon('<circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>'),
  archive: icon(
    '<rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/>',
  ),
  copy: icon(
    '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
  ),
  delete: icon(
    '<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><path d="M10 11v6"/><path d="M14 11v6"/>',
  ),
}

export const swipeableListClasses = {
  story: css({ display: "grid", gap: "3", maxWidth: "md" }),
  icon: css({ display: "flex" }),
  avatar: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: "0",
    boxSize: "10",
    borderRadius: "full",
    bg: "colorPalette.subtle",
    color: "colorPalette.fg",
    colorPalette: "blue",
  }),
  details: css({ display: "grid", gap: "0.5", minWidth: "0" }),
  name: css({ fontWeight: "semibold" }),
  id: css({ color: "fg.muted", textStyle: "xs", fontFamily: "mono" }),
  copy: css({ colorPalette: "blue" }),
  archive: css({ colorPalette: "purple" }),
  delete: css({ colorPalette: "red" }),
}
