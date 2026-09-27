import * as swipeableList from "@isbatak/zag-swipeable-list"
import { mergeProps, normalizeProps, useMachine } from "@zag-js/react"
import { useId, useState } from "react"

interface Message {
  id: string
  from: string
  subject: string
  unread: boolean
  flagged: boolean
}

const initialMessages: Message[] = [
  { id: "1", from: "Ada Lovelace", subject: "Notes on the analytical engine", unread: true, flagged: false },
  { id: "2", from: "Alan Turing", subject: "Re: Computable numbers", unread: false, flagged: true },
  { id: "3", from: "Grace Hopper", subject: "Found a moth in relay #70", unread: true, flagged: false },
  { id: "4", from: "Edsger Dijkstra", subject: "Go To statement considered harmful", unread: false, flagged: false },
  { id: "5", from: "Barbara Liskov", subject: "Substitution, a proposal", unread: false, flagged: false },
]

export interface BasicProps {
  dir?: "ltr" | "rtl"
  disabled?: boolean
  fullSwipe?: boolean
  fullSwipeThreshold?: number
  threshold?: number
  snapBounce?: number
  resistance?: number
  onOpenItemChange?: (details: swipeableList.OpenItemChangeDetails) => void
  onFullSwipe?: (details: swipeableList.FullSwipeDetails) => void
}

export function Basic(props: BasicProps) {
  const [messages, setMessages] = useState(initialMessages)
  const [log, setLog] = useState("")

  const service = useMachine(swipeableList.machine, {
    id: useId(),
    fullSwipe: true,
    ...props,
  })

  const api = swipeableList.connect(service, normalizeProps)

  function update(id: string, patch: Partial<Message>) {
    setMessages((prev) => prev.map((message) => (message.id === id ? { ...message, ...patch } : message)))
  }

  function remove(id: string) {
    setMessages((prev) => prev.filter((message) => message.id !== id))
    setLog(`Deleted ${id}`)
  }

  return (
    <main className="swipeable-list-story">
      <ul {...api.getRootProps()}>
        {messages.map((message) => (
          <li key={message.id} {...api.getItemProps({ value: message.id })}>
            <div {...api.getItemActionsProps({ value: message.id, side: "start" })}>
              <button
                {...mergeProps(api.getItemActionProps({ value: message.id, side: "start" }), {
                  onClick: () => update(message.id, { unread: !message.unread }),
                })}
                data-tone="blue"
              >
                {message.unread ? "Read" : "Unread"}
              </button>
            </div>

            <div {...api.getItemContentProps({ value: message.id })}>
              <strong>
                {message.unread ? "● " : ""}
                {message.from}
                {message.flagged ? " ⚑" : ""}
              </strong>
              <span>{message.subject}</span>
            </div>

            <div {...api.getItemActionsProps({ value: message.id, side: "end" })}>
              <button
                {...mergeProps(api.getItemActionProps({ value: message.id, side: "end" }), {
                  onClick: () => update(message.id, { flagged: !message.flagged }),
                })}
                data-tone="amber"
              >
                {message.flagged ? "Unflag" : "Flag"}
              </button>
              <button
                {...mergeProps(api.getItemActionProps({ value: message.id, side: "end" }), {
                  onClick: () => remove(message.id),
                })}
                data-tone="red"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <output data-testid="open-item">
        Open: {api.openItem ? `${api.openItem.value} (${api.openItem.side})` : "none"}
      </output>
      <output data-testid="log">{log}</output>
    </main>
  )
}
