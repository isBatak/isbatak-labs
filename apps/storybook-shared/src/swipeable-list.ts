import { css } from "@isbatak/panda-ds/css"

export interface Message {
  id: string
  from: string
  subject: string
  unread: boolean
  flagged: boolean
}

export const initialMessages: Message[] = [
  { id: "1", from: "Ada Lovelace", subject: "Notes on the analytical engine", unread: true, flagged: false },
  { id: "2", from: "Alan Turing", subject: "Re: Computable numbers", unread: false, flagged: true },
  { id: "3", from: "Grace Hopper", subject: "Found a moth in relay #70", unread: true, flagged: false },
  { id: "4", from: "Edsger Dijkstra", subject: "Go To statement considered harmful", unread: false, flagged: false },
  { id: "5", from: "Barbara Liskov", subject: "Substitution, a proposal", unread: false, flagged: false },
]

export function formatSender(message: Message) {
  return `${message.unread ? "● " : ""}${message.from}${message.flagged ? " ⚑" : ""}`
}

export function formatOpenItem(openItem: { value: string; side: string } | null) {
  return `Open: ${openItem ? `${openItem.value} (${openItem.side})` : "none"}`
}

export const swipeableListClasses = {
  story: css({ display: "grid", gap: "3", maxWidth: "md" }),
  subject: css({ color: "fg.muted" }),
  blue: css({ colorPalette: "blue" }),
  orange: css({ colorPalette: "orange" }),
  red: css({ colorPalette: "red" }),
}
