import {
  formatOpenItem,
  formatSender,
  initialMessages,
  type Message,
  type SwipeableListControls,
} from "@isbatak/storybook-shared"
import * as swipeableList from "@isbatak/zag-swipeable-list"
import { normalizeProps, spreadProps, VanillaMachine } from "@zag-js/vanilla"
import { createElement, mount } from "../mount"

export interface BasicProps extends Partial<SwipeableListControls> {
  onOpenItemChange?: (details: swipeableList.OpenItemChangeDetails) => void
  onFullSwipe?: (details: swipeableList.FullSwipeDetails) => void
}

export function createBasic(props: BasicProps) {
  const main = createElement(`
    <main class="swipeable-list-story">
      <ul class="swipeable-list-root"></ul>
      <output data-testid="open-item"></output>
      <output data-testid="log"></output>
    </main>
  `)
  const root = main.querySelector<HTMLElement>(".swipeable-list-root")!
  const rows = new Map<string, HTMLElement>()
  let messages = initialMessages

  const machine = new VanillaMachine(swipeableList.machine, {
    id: crypto.randomUUID(),
    ...props,
  })

  function update(id: string, patch: Partial<Message>) {
    messages = messages.map((message) => (message.id === id ? { ...message, ...patch } : message))
    render()
  }

  function remove(id: string) {
    messages = messages.filter((message) => message.id !== id)
    main.querySelector("[data-testid=log]")!.textContent = `Deleted ${id}`
    render()
  }

  function createRow() {
    return createElement(`
      <li>
        <div class="start-actions"><button class="unread" data-tone="blue"></button></div>
        <div class="content"><strong></strong><span></span></div>
        <div class="end-actions">
          <button class="flag" data-tone="amber"></button>
          <button class="delete" data-tone="red">Delete</button>
        </div>
      </li>
    `)
  }

  main.addEventListener("click", (event) => {
    const button = (event.target as Element).closest("button")
    const id = button?.closest<HTMLElement>("[data-part=item]")?.dataset.value
    const message = messages.find((message) => message.id === id)
    if (!button || !message) return
    if (button.matches(".unread")) update(message.id, { unread: !message.unread })
    if (button.matches(".flag")) update(message.id, { flagged: !message.flagged })
    if (button.matches(".delete")) remove(message.id)
  })

  function render() {
    const api = swipeableList.connect(machine.service, normalizeProps)
    const spread = (element: Element, props: any) => spreadProps(element, props, machine.scope.id)

    spread(root, api.getRootProps())

    for (const id of rows.keys()) {
      if (!messages.some((message) => message.id === id)) rows.delete(id)
    }

    const elements = messages.map((message) => {
      const value = message.id
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

      row.querySelector(".unread")!.textContent = message.unread ? "Read" : "Unread"
      row.querySelector(".flag")!.textContent = message.flagged ? "Unflag" : "Flag"
      row.querySelector("strong")!.textContent = formatSender(message)
      row.querySelector("span")!.textContent = message.subject
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
