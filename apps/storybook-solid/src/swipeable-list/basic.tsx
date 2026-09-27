import { cx } from "@isbatak/panda-ds/css"
import { swipeableList as swipeableListRecipe } from "@isbatak/panda-ds/recipes"
import {
  formatOpenItem,
  formatSender,
  initialMessages,
  type Message,
  swipeableListClasses as classes,
  type SwipeableListControls,
} from "@isbatak/storybook-shared"
import * as swipeableList from "@isbatak/zag-swipeable-list"
import { mergeProps, normalizeProps, useMachine } from "@zag-js/solid"
import { For, createMemo, createSignal, createUniqueId } from "solid-js"

const styles = swipeableListRecipe()

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
    <main class={classes.story}>
      <ul {...api().getRootProps()} class={styles.root}>
        <For each={messages()}>
          {(message) => (
            <li {...api().getItemProps({ value: message.id })} class={styles.item}>
              <div {...api().getItemActionsProps({ value: message.id, side: "start" })} class={styles.itemActions}>
                <button
                  {...mergeProps(api().getItemActionProps({ value: message.id, side: "start" }), {
                    onClick: () => update(message.id, { unread: !message.unread }),
                  })}
                  class={cx(styles.itemAction, classes.blue)}
                >
                  {message.unread ? "Read" : "Unread"}
                </button>
              </div>

              <div {...api().getItemContentProps({ value: message.id })} class={styles.itemContent}>
                <strong>{formatSender(message)}</strong>
                <span class={classes.subject}>{message.subject}</span>
              </div>

              <div {...api().getItemActionsProps({ value: message.id, side: "end" })} class={styles.itemActions}>
                <button
                  {...mergeProps(api().getItemActionProps({ value: message.id, side: "end" }), {
                    onClick: () => update(message.id, { flagged: !message.flagged }),
                  })}
                  class={cx(styles.itemAction, classes.orange)}
                >
                  {message.flagged ? "Unflag" : "Flag"}
                </button>
                <button
                  {...mergeProps(api().getItemActionProps({ value: message.id, side: "end" }), {
                    onClick: () => remove(message.id),
                  })}
                  class={cx(styles.itemAction, classes.red)}
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
