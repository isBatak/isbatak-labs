<script lang="ts">
  import { cx } from "@isbatak/panda-ds/css"
  import { swipeableList as swipeableListRecipe } from "@isbatak/panda-ds/recipes"
  import {
    copyText,
    formatOpenItem,
    initialAccounts,
    swipeableListClasses as classes,
    swipeableListIcons as icons,
    type Account,
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

  let accounts = $state<Account[]>(initialAccounts)
  let log = $state("")

  function copy(account: Account) {
    void copyText(account.id)
    log = `Copied ${account.id}`
  }

  function remove(account: Account, action: string) {
    accounts = accounts.filter((item) => item.id !== account.id)
    log = `${action} ${account.name}`
  }
</script>

<main class={classes.story}>
  <ul {...api.getRootProps()} class={styles.root}>
    {#each accounts as account (account.id)}
      <li {...api.getItemProps({ value: account.id })} class={styles.item}>
        <div {...api.getItemActionsProps({ value: account.id, side: "start" })} class={styles.itemActions}>
          <button
            {...mergeProps(api.getItemActionProps({ value: account.id, side: "start" }), {
              onclick: () => copy(account),
            })}
            aria-label="Copy account ID"
            class={cx(styles.itemAction, classes.copy)}
          >
            <span class={classes.icon}>{@html icons.copy}</span>
          </button>
        </div>

        <div {...api.getItemContentProps({ value: account.id })} class={styles.itemContent}>
          <span class={classes.avatar}>{@html icons.account}</span>
          <span class={classes.details}>
            <span class={classes.name}>{account.name}</span>
            <span class={classes.id}>{account.id}</span>
          </span>
        </div>

        <div {...api.getItemActionsProps({ value: account.id, side: "end" })} class={styles.itemActions}>
          <button
            {...mergeProps(api.getItemActionProps({ value: account.id, side: "end" }), {
              onclick: () => remove(account, "Archived"),
            })}
            aria-label="Archive"
            class={cx(styles.itemAction, classes.archive)}
          >
            <span class={classes.icon}>{@html icons.archive}</span>
          </button>
          <button
            {...mergeProps(api.getItemActionProps({ value: account.id, side: "end" }), {
              onclick: () => remove(account, "Deleted"),
            })}
            aria-label="Delete"
            class={cx(styles.itemAction, classes.delete)}
          >
            <span class={classes.icon}>{@html icons.delete}</span>
          </button>
        </div>
      </li>
    {/each}
  </ul>

  <output data-testid="open-item">{formatOpenItem(api.openItem)}</output>
  <output data-testid="log">{log}</output>
</main>
