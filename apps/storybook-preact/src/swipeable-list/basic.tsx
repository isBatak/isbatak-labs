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
import { mergeProps, normalizeProps, useMachine } from "@zag-js/preact"
import { useId, useState } from "preact/hooks"

const styles = swipeableListRecipe()

export interface BasicProps extends Partial<SwipeableListControls> {
  onOpenItemChange?: (details: swipeableList.OpenItemChangeDetails) => void
  onFullSwipe?: (details: swipeableList.FullSwipeDetails) => void
}

export function Basic(props: BasicProps) {
  const [accounts, setAccounts] = useState(initialAccounts)
  const [log, setLog] = useState("")

  const service = useMachine(swipeableList.machine, {
    id: useId(),
    ...props,
  })

  const api = swipeableList.connect(service, normalizeProps)

  function copy(account: Account) {
    void copyText(account.id)
    setLog(`Copied ${account.id}`)
  }

  function remove(account: Account, action: string) {
    setAccounts((prev) => prev.filter((item) => item.id !== account.id))
    setLog(`${action} ${account.name}`)
  }

  return (
    <main className={classes.story}>
      <ul {...api.getRootProps()} className={styles.root}>
        {accounts.map((account) => (
          <li key={account.id} {...api.getItemProps({ value: account.id })} className={styles.item}>
            <div {...api.getItemActionsProps({ value: account.id, side: "start" })} className={styles.itemActions}>
              <button
                {...mergeProps(api.getItemActionProps({ value: account.id, side: "start" }), {
                  onClick: () => copy(account),
                })}
                aria-label="Copy account ID"
                className={cx(styles.itemAction, classes.copy)}
              >
                <span className={classes.icon} dangerouslySetInnerHTML={{ __html: icons.copy }} />
              </button>
            </div>

            <div {...api.getItemContentProps({ value: account.id })} className={styles.itemContent}>
              <span className={classes.avatar} dangerouslySetInnerHTML={{ __html: icons.account }} />
              <span className={classes.details}>
                <span className={classes.name}>{account.name}</span>
                <span className={classes.id}>{account.id}</span>
              </span>
            </div>

            <div {...api.getItemActionsProps({ value: account.id, side: "end" })} className={styles.itemActions}>
              <button
                {...mergeProps(api.getItemActionProps({ value: account.id, side: "end" }), {
                  onClick: () => remove(account, "Archived"),
                })}
                aria-label="Archive"
                className={cx(styles.itemAction, classes.archive)}
              >
                <span className={classes.icon} dangerouslySetInnerHTML={{ __html: icons.archive }} />
              </button>
              <button
                {...mergeProps(api.getItemActionProps({ value: account.id, side: "end" }), {
                  onClick: () => remove(account, "Deleted"),
                })}
                aria-label="Delete"
                className={cx(styles.itemAction, classes.delete)}
              >
                <span className={classes.icon} dangerouslySetInnerHTML={{ __html: icons.delete }} />
              </button>
            </div>
          </li>
        ))}
      </ul>

      <output data-testid="open-item">{formatOpenItem(api.openItem)}</output>
      <output data-testid="log">{log}</output>
    </main>
  )
}
