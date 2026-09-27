<script lang="ts">
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
  import { mergeProps, normalizeProps, useMachine } from "@zag-js/svelte"

  const styles = swipeableListRecipe()

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

<main class={classes.story}>
  <ul {...api.getRootProps()} class={styles.root}>
    {#each messages as message (message.id)}
      <li {...api.getItemProps({ value: message.id })} class={styles.item}>
        <div {...api.getItemActionsProps({ value: message.id, side: "start" })} class={styles.itemActions}>
          <button
            {...mergeProps(api.getItemActionProps({ value: message.id, side: "start" }), {
              onclick: () => update(message.id, { unread: !message.unread }),
            })}
            class={cx(styles.itemAction, classes.blue)}
          >
            {message.unread ? "Read" : "Unread"}
          </button>
        </div>

        <div {...api.getItemContentProps({ value: message.id })} class={styles.itemContent}>
          <strong>{formatSender(message)}</strong>
          <span class={classes.subject}>{message.subject}</span>
        </div>

        <div {...api.getItemActionsProps({ value: message.id, side: "end" })} class={styles.itemActions}>
          <button
            {...mergeProps(api.getItemActionProps({ value: message.id, side: "end" }), {
              onclick: () => update(message.id, { flagged: !message.flagged }),
            })}
            class={cx(styles.itemAction, classes.orange)}
          >
            {message.flagged ? "Unflag" : "Flag"}
          </button>
          <button
            {...mergeProps(api.getItemActionProps({ value: message.id, side: "end" }), {
              onclick: () => remove(message.id),
            })}
            class={cx(styles.itemAction, classes.red)}
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
