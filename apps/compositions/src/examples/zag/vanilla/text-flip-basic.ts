import { css } from "styled-system/css"
import { textFlip as textFlipRecipe } from "styled-system/recipes"
import * as textFlip from "@isbatak/zag-text-flip"
import { normalizeProps, spreadProps, VanillaMachine } from "@zag-js/vanilla"

const styles = textFlipRecipe()

const classes = {
  heading: css({ textStyle: "3xl", fontWeight: "semibold", letterSpacing: "tight" }),
}

export function createTextFlipBasic(container: HTMLElement) {
  container.innerHTML = `
    <p class="${classes.heading}">
      Build for
      <span data-el="root" class="${styles.root}">
        <span data-el="item" class="${styles.item}">React</span>
        <span data-el="item" class="${styles.item}">Vue</span>
        <span data-el="item" class="${styles.item}">Svelte</span>
        <span data-el="item" class="${styles.item}">Solid</span>
      </span>
    </p>
  `

  const root = container.querySelector<HTMLElement>("[data-el=root]")!
  const items = Array.from(root.querySelectorAll<HTMLElement>("[data-el=item]"))

  const machine = new VanillaMachine(textFlip.machine, {
    id: crypto.randomUUID(),
  })

  const spread = (node: Element, props: object) => spreadProps(node, props, machine.scope.id)

  const render = () => {
    const api = textFlip.connect(machine.service, normalizeProps)
    spread(root, api.getRootProps())
    items.forEach((item, index) => spread(item, api.getItemProps({ index })))
  }

  render()
  machine.subscribe(render)
  machine.start()

  return () => {
    machine.stop()
    container.replaceChildren()
  }
}
