import { textFlip as textFlipRecipe } from "@isbatak/storybook-shared/recipes"
import { textFlipClasses as classes, type TextFlipControls } from "@isbatak/storybook-shared"
import * as textFlip from "@isbatak/zag-text-flip"
import { normalizeProps, spreadProps, VanillaMachine } from "@zag-js/vanilla"
import { createElement, mount } from "../mount"

const styles = textFlipRecipe()

export interface BasicProps extends Partial<TextFlipControls> {
  onIndexChange?: (details: textFlip.IndexChangeDetails) => void
}

export function createBasic(props: BasicProps) {
  const main = createElement(`
    <main class="${classes.story}">
      <h1 class="${classes.heading}">
        Build for
        <span data-el="root" class="${styles.root}">
          <span data-el="item" class="${styles.item}">React</span>
          <span data-el="item" class="${styles.item}">Vue</span>
          <span data-el="item" class="${styles.item}">Svelte</span>
          <span data-el="item" class="${styles.item}">Solid</span>
        </span>
      </h1>
    </main>
  `)
  const root = main.querySelector<HTMLElement>("[data-el=root]")!
  const items = Array.from(root.querySelectorAll<HTMLElement>("[data-el=item]"))

  const machine = new VanillaMachine(textFlip.machine, {
    id: crypto.randomUUID(),
    ...props,
  })

  const spread = (node: Element, props: object) => spreadProps(node, props, machine.scope.id)

  function render() {
    const api = textFlip.connect(machine.service, normalizeProps)
    spread(root, api.getRootProps())
    items.forEach((item, index) => spread(item, api.getItemProps({ index })))
  }

  render()
  machine.subscribe(render)
  return mount(main, [machine])
}
