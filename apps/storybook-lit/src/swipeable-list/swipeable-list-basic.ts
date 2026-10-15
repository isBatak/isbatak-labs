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
import { MachineController, normalizeProps, spread, type SchemaOf } from "@isbatak/zag-lit"
import * as swipeableList from "@isbatak/zag-swipeable-list"
import { html, LitElement } from "lit"
import { repeat } from "lit/directives/repeat.js"
import { unsafeSVG } from "lit/directives/unsafe-svg.js"

const styles = swipeableListRecipe()

export class SwipeableListBasic extends LitElement {
  static properties = {
    args: { attribute: false },
    accounts: { state: true },
    log: { state: true },
  }

  declare args: Partial<SwipeableListControls> & {
    onOpenItemChange?: (details: swipeableList.OpenItemChangeDetails) => void
    onFullSwipe?: (details: swipeableList.FullSwipeDetails) => void
  }
  declare accounts: Account[]
  declare log: string

  readonly controller: MachineController<SchemaOf<swipeableList.Machine>> = new MachineController(
    this,
    swipeableList.machine,
    () => ({
      id: this.id || "swipeable-list-basic",
      getRootNode: () => this.getRootNode() as Document,
      ...this.args,
    }),
  )

  constructor() {
    super()
    this.args = {}
    this.accounts = initialAccounts
    this.log = ""
  }

  protected createRenderRoot() {
    return this
  }

  #copy(account: Account) {
    void copyText(account.id)
    this.log = `Copied ${account.id}`
  }

  #remove(account: Account, action: string) {
    this.accounts = this.accounts.filter((item) => item.id !== account.id)
    this.log = `${action} ${account.name}`
  }

  protected render() {
    const api = swipeableList.connect(this.controller.service, normalizeProps)
    return html`
      <main class=${classes.story}>
        <ul class=${styles.root} ${spread(api.getRootProps())}>
          ${repeat(
            this.accounts,
            (account) => account.id,
            (account) => {
              const value = account.id
              return html`
                <li class=${styles.item} ${spread(api.getItemProps({ value }))}>
                  <div class=${styles.itemActions} ${spread(api.getItemActionsProps({ value, side: "start" }))}>
                    <button
                      class="${styles.itemAction} ${classes.copy}"
                      aria-label="Copy account ID"
                      ${spread(api.getItemActionProps({ value, side: "start" }))}
                      @click=${() => this.#copy(account)}
                    >
                      <span class=${classes.icon}>${unsafeSVG(icons.copy)}</span>
                    </button>
                  </div>
                  <div class=${styles.itemContent} ${spread(api.getItemContentProps({ value }))}>
                    <span class=${classes.avatar}>${unsafeSVG(icons.account)}</span>
                    <span class=${classes.details}>
                      <span class=${classes.name}>${account.name}</span>
                      <span class=${classes.id}>${account.id}</span>
                    </span>
                  </div>
                  <div class=${styles.itemActions} ${spread(api.getItemActionsProps({ value, side: "end" }))}>
                    <button
                      class="${styles.itemAction} ${classes.archive}"
                      aria-label="Archive"
                      ${spread(api.getItemActionProps({ value, side: "end" }))}
                      @click=${() => this.#remove(account, "Archived")}
                    >
                      <span class=${classes.icon}>${unsafeSVG(icons.archive)}</span>
                    </button>
                    <button
                      class="${styles.itemAction} ${classes.delete}"
                      aria-label="Delete"
                      ${spread(api.getItemActionProps({ value, side: "end" }))}
                      @click=${() => this.#remove(account, "Deleted")}
                    >
                      <span class=${classes.icon}>${unsafeSVG(icons.delete)}</span>
                    </button>
                  </div>
                </li>
              `
            },
          )}
        </ul>
        <output data-testid="open-item">${formatOpenItem(api.openItem)}</output>
        <output data-testid="log">${this.log}</output>
      </main>
    `
  }
}

customElements.define("swipeable-list-basic", SwipeableListBasic)
