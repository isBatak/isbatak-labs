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
import { mergeProps, normalizeProps, useMachine } from "@zag-js/solid"
import { For, createMemo, createSignal, createUniqueId } from "solid-js"

const styles = swipeableListRecipe()

export interface BasicProps extends Partial<SwipeableListControls> {
  onOpenItemChange?: (details: swipeableList.OpenItemChangeDetails) => void
  onFullSwipe?: (details: swipeableList.FullSwipeDetails) => void
}

export function Basic(props: BasicProps) {
  const [accounts, setAccounts] = createSignal(initialAccounts)
  const [log, setLog] = createSignal("")

  const id = createUniqueId()
  const service = useMachine(swipeableList.machine, () => ({
    id,
    ...props,
  }))
  const api = createMemo(() => swipeableList.connect(service, normalizeProps))

  function copy(account: Account) {
    void copyText(account.id)
    setLog(`Copied ${account.id}`)
  }

  function remove(account: Account, action: string) {
    setAccounts((prev) => prev.filter((item) => item.id !== account.id))
    setLog(`${action} ${account.name}`)
  }

  return (
    <main class={classes.story}>
      <ul {...api().getRootProps()} class={styles.root}>
        <For each={accounts()}>
          {(account) => (
            <li {...api().getItemProps({ value: account.id })} class={styles.item}>
              <div {...api().getItemActionsProps({ value: account.id, side: "start" })} class={styles.itemActions}>
                <button
                  {...mergeProps(api().getItemActionProps({ value: account.id, side: "start" }), {
                    onClick: () => copy(account),
                  })}
                  aria-label="Copy account ID"
                  class={cx(styles.itemAction, classes.copy)}
                >
                  <span class={classes.icon} innerHTML={icons.copy} />
                </button>
              </div>

              <div {...api().getItemContentProps({ value: account.id })} class={styles.itemContent}>
                <span class={classes.avatar} innerHTML={icons.account} />
                <span class={classes.details}>
                  <span class={classes.name}>{account.name}</span>
                  <span class={classes.id}>{account.id}</span>
                </span>
              </div>

              <div {...api().getItemActionsProps({ value: account.id, side: "end" })} class={styles.itemActions}>
                <button
                  {...mergeProps(api().getItemActionProps({ value: account.id, side: "end" }), {
                    onClick: () => remove(account, "Archived"),
                  })}
                  aria-label="Archive"
                  class={cx(styles.itemAction, classes.archive)}
                >
                  <span class={classes.icon} innerHTML={icons.archive} />
                </button>
                <button
                  {...mergeProps(api().getItemActionProps({ value: account.id, side: "end" }), {
                    onClick: () => remove(account, "Deleted"),
                  })}
                  aria-label="Delete"
                  class={cx(styles.itemAction, classes.delete)}
                >
                  <span class={classes.icon} innerHTML={icons.delete} />
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
