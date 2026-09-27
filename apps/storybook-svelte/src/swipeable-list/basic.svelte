<script lang="ts">
  import {
    formatOpenItem,
    formatSender,
    initialMessages,
    type Message,
    type SwipeableListControls,
  } from "@isbatak/storybook-shared"
  import * as swipeableList from "@isbatak/zag-swipeable-list"
  import { mergeProps, normalizeProps, useMachine } from "@zag-js/svelte"

  interface Props extends Partial<SwipeableListControls> {
    onOpenItemChange?: (details: swipeableList.OpenItemChangeDetails) => void
    onFullSwipe?: (details: swipeableList.FullSwipeDetails) => void
  }

  const props: Props = $props()
  const id = $props.id()
  const service = useMachine(swipeableList.machine, () => ({
    id,
    ...props,
  }))
  const api = $derived(swipeableList.connect(service, normalizeProps))

  let messages = $state<Message[]>(initialMessages)
  let log = $state("")

  function update(id: string, patch: Partial<Message>) {
    messages = messages.map((message) => (message.id === id ? { ...message, ...patch } : message))
  }

  function remove(id: string) {
    messages = messages.filter((message) => message.id !== id)
    log = `Deleted ${id}`
  }
</script>

<main class="swipeable-list-story">
  <ul {...api.getRootProps()}>
    {#each messages as message (message.id)}
      <li {...api.getItemProps({ value: message.id })}>
        <div {...api.getItemActionsProps({ value: message.id, side: "start" })}>
          <button
            {...mergeProps(api.getItemActionProps({ value: message.id, side: "start" }), {
              onclick: () => update(message.id, { unread: !message.unread }),
            })}
            data-tone="blue"
          >
            {message.unread ? "Read" : "Unread"}
          </button>
        </div>

        <div {...api.getItemContentProps({ value: message.id })}>
          <strong>{formatSender(message)}</strong>
          <span>{message.subject}</span>
        </div>

        <div {...api.getItemActionsProps({ value: message.id, side: "end" })}>
          <button
            {...mergeProps(api.getItemActionProps({ value: message.id, side: "end" }), {
              onclick: () => update(message.id, { flagged: !message.flagged }),
            })}
            data-tone="amber"
          >
            {message.flagged ? "Unflag" : "Flag"}
          </button>
          <button
            {...mergeProps(api.getItemActionProps({ value: message.id, side: "end" }), {
              onclick: () => remove(message.id),
            })}
            data-tone="red"
          >
            Delete
          </button>
        </div>
      </li>
    {/each}
  </ul>

  <output data-testid="open-item">{formatOpenItem(api.openItem)}</output>
  <output data-testid="log">{log}</output>
</main>
