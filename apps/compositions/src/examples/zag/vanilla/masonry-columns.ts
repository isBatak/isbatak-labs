import { css, cx } from "styled-system/css"
import { masonry as masonryRecipe } from "styled-system/recipes"
import * as masonry from "@isbatak/zag-masonry"
import { normalizeProps, spreadProps, VanillaMachine } from "@zag-js/vanilla"

const styles = masonryRecipe()

const classes = {
  root: css({ "--masonry-columns": { base: "3", sm: "4" } }),
  tile: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "fg.muted",
    textStyle: "sm",
  }),
}

export function createMasonryColumns(container: HTMLElement) {
  container.innerHTML = `
    <div data-el="root" class="${cx(styles.root, classes.root)}">
      <div data-el="item" data-value="1" class="${styles.item}">
        <div class="${classes.tile}" style="height: 150px">1</div>
      </div>
      <div data-el="item" data-value="2" class="${styles.item}">
        <div class="${classes.tile}" style="height: 30px">2</div>
      </div>
      <div data-el="item" data-value="3" class="${styles.item}">
        <div class="${classes.tile}" style="height: 90px">3</div>
      </div>
      <div data-el="item" data-value="4" class="${styles.item}">
        <div class="${classes.tile}" style="height: 70px">4</div>
      </div>
      <div data-el="item" data-value="5" class="${styles.item}">
        <div class="${classes.tile}" style="height: 90px">5</div>
      </div>
      <div data-el="item" data-value="6" class="${styles.item}">
        <div class="${classes.tile}" style="height: 100px">6</div>
      </div>
      <div data-el="item" data-value="7" class="${styles.item}">
        <div class="${classes.tile}" style="height: 150px">7</div>
      </div>
      <div data-el="item" data-value="8" class="${styles.item}">
        <div class="${classes.tile}" style="height: 30px">8</div>
      </div>
      <div data-el="item" data-value="9" class="${styles.item}">
        <div class="${classes.tile}" style="height: 50px">9</div>
      </div>
      <div data-el="item" data-value="10" class="${styles.item}">
        <div class="${classes.tile}" style="height: 80px">10</div>
      </div>
    </div>
  `

  const root = container.querySelector<HTMLElement>("[data-el=root]")!
  const items = Array.from(root.querySelectorAll<HTMLElement>("[data-el=item]"))

  const machine = new VanillaMachine(masonry.machine, {
    id: crypto.randomUUID(),
  })

  const spread = (node: Element, props: object) => spreadProps(node, props, machine.scope.id)

  const render = () => {
    const api = masonry.connect(machine.service, normalizeProps)
    spread(root, api.getRootProps())
    for (const item of items) {
      spread(item, api.getItemProps({ value: item.dataset.value!, span: Number(item.dataset.span) || 1 }))
    }
  }

  render()
  machine.subscribe(render)
  machine.start()

  return () => {
    machine.stop()
    container.replaceChildren()
  }
}
