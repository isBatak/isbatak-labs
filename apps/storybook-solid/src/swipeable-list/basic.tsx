import {
  formatOpenItem,
  formatSender,
  initialMessages,
  type Message,
  type SwipeableListControls,
} from "@isbatak/storybook-shared"
import * as swipeableList from "@isbatak/zag-swipeable-list"
import { mergeProps, normalizeProps, useMachine } from "@zag-js/solid"
import { For, createMemo, createSignal, createUniqueId } from "solid-js"

export interface BasicProps extends Partial<SwipeableListControls> {
  onOpenItemChange?: (details: swipeableList.OpenItemChangeDetails) => void
  onFullSwipe?: (details: swipeableList.FullSwipeDetails) => void
}

export function Basic(props: BasicProps) {
  const [messages, setMessages] = createSignal(initialMessages)
  const [log, setLog] = createSignal("")

  const id = createUniqueId()
  const service = useMachine(swipeableList.machine, () => ({
    id,
    ...props,
  }))
  const api = createMemo(() => swipeableList.connect(service, normalizeProps))

  function update(id: string, patch: Partial<Message>) {
    setMessages((prev) => prev.map((message) => (message.id === id ? { ...message, ...patch } : message)))
  }

  function remove(id: string) {
    setMessages((prev) => prev.filter((message) => message.id !== id))
    setLog(`Deleted ${id}`)
  }

  return (
    <main class="swipeable-list-story">
      <ul {...api().getRootProps()}>
        <For each={messages()}>
          {(message) => (
            <li {...api().getItemProps({ value: message.id })}>
              <div {...api().getItemActionsProps({ value: message.id, side: "start" })}>
                <button
                  {...mergeProps(api().getItemActionProps({ value: message.id, side: "start" }), {
                    onClick: () => update(message.id, { unread: !message.unread }),
                  })}
                  data-tone="blue"
                >
                  {message.unread ? "Read" : "Unread"}
                </button>
              </div>

              <div {...api().getItemContentProps({ value: message.id })}>
                <strong>{formatSender(message)}</strong>
                <span>{message.subject}</span>
              </div>

              <div {...api().getItemActionsProps({ value: message.id, side: "end" })}>
                <button
                  {...mergeProps(api().getItemActionProps({ value: message.id, side: "end" }), {
                    onClick: () => update(message.id, { flagged: !message.flagged }),
                  })}
                  data-tone="amber"
                >
                  {message.flagged ? "Unflag" : "Flag"}
                </button>
                <button
                  {...mergeProps(api().getItemActionProps({ value: message.id, side: "end" }), {
                    onClick: () => remove(message.id),
                  })}
                  data-tone="red"
                >
                  Delete
                </button>
              </div>
            </li>
          )}
        </For>
      </ul>

      <output data-testid="open-item">{formatOpenItem(api().openItem)}</output>
      <output data-testid="log">{log()}</output>
    </main>
  )
}
