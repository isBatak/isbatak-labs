import { swipeableList as swipeableListRecipe } from "@isbatak/storybook-shared/recipes"
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
import { normalizeProps, spreadProps, VanillaMachine } from "@zag-js/vanilla"
import { createElement, mount } from "../mount"

const styles = swipeableListRecipe()

export interface BasicProps extends Partial<SwipeableListControls> {
  onOpenItemChange?: (details: swipeableList.OpenItemChangeDetails) => void
  onFullSwipe?: (details: swipeableList.FullSwipeDetails) => void
}

export function createBasic(props: BasicProps) {
  const main = createElement(`
    <main class="${classes.story}">
      <ul class="swipeable-list-root ${styles.root}"></ul>
      <output data-testid="open-item"></output>
      <output data-testid="log"></output>
    </main>
  `)
  const root = main.querySelector<HTMLElement>(".swipeable-list-root")!
  const log = main.querySelector<HTMLElement>("[data-testid=log]")!
  const rows = new Map<string, HTMLElement>()
  let accounts = initialAccounts

  const machine = new VanillaMachine(swipeableList.machine, {
    id: crypto.randomUUID(),
    ...props,
  })

  function copy(account: Account) {
    void copyText(account.id)
    log.textContent = `Copied ${account.id}`
  }

  function remove(account: Account, action: string) {
    accounts = accounts.filter((item) => item.id !== account.id)
    log.textContent = `${action} ${account.name}`
    render()
  }

  function createRow() {
    return createElement(`
      <li class="${styles.item}">
        <div class="start-actions ${styles.itemActions}">
          <button class="copy ${styles.itemAction} ${classes.copy}" aria-label="Copy account ID">
            <span class="${classes.icon}">${icons.copy}</span>
          </button>
        </div>
        <div class="content ${styles.itemContent}">
          <span class="${classes.avatar}">${icons.account}</span>
          <span class="${classes.details}">
            <span class="name ${classes.name}"></span>
            <span class="id ${classes.id}"></span>
          </span>
        </div>
        <div class="end-actions ${styles.itemActions}">
          <button class="archive ${styles.itemAction} ${classes.archive}" aria-label="Archive">
            <span class="${classes.icon}">${icons.archive}</span>
          </button>
          <button class="delete ${styles.itemAction} ${classes.delete}" aria-label="Delete">
            <span class="${classes.icon}">${icons.delete}</span>
          </button>
        </div>
      </li>
    `)
  }

  main.addEventListener("click", (event) => {
    const button = (event.target as Element).closest("button")
    const id = button?.closest<HTMLElement>("[data-part=item]")?.dataset.value
    const account = accounts.find((item) => item.id === id)
    if (!button || !account) return
    if (button.matches(".copy")) copy(account)
    if (button.matches(".archive")) remove(account, "Archived")
    if (button.matches(".delete")) remove(account, "Deleted")
  })

  function render() {
    const api = swipeableList.connect(machine.service, normalizeProps)
    const spread = (element: Element, props: any) => spreadProps(element, props, machine.scope.id)

    spread(root, api.getRootProps())

    for (const id of rows.keys()) {
      if (!accounts.some((account) => account.id === id)) rows.delete(id)
    }

    const elements = accounts.map((account) => {
      const value = account.id
      const row = rows.get(value) ?? createRow()
      rows.set(value, row)

      spread(row, api.getItemProps({ value }))
      spread(row.querySelector(".start-actions")!, api.getItemActionsProps({ value, side: "start" }))
      spread(row.querySelector(".end-actions")!, api.getItemActionsProps({ value, side: "end" }))
      spread(row.querySelector(".content")!, api.getItemContentProps({ value }))
      for (const button of row.querySelectorAll(".start-actions button")) {
        spread(button, api.getItemActionProps({ value, side: "start" }))
      }
      for (const button of row.querySelectorAll(".end-actions button")) {
        spread(button, api.getItemActionProps({ value, side: "end" }))
      }

      row.querySelector(".name")!.textContent = account.name
      row.querySelector(".id")!.textContent = account.id
      return row
    })

    if (
      elements.some((element, index) => root.children[index] !== element) ||
      root.children.length !== elements.length
    ) {
      root.replaceChildren(...elements)
    }

    main.querySelector("[data-testid=open-item]")!.textContent = formatOpenItem(api.openItem)
  }

  render()
  machine.subscribe(render)
  return mount(main, [machine])
}
