import { masonry as masonryRecipe } from "@isbatak/storybook-shared/recipes"
import { formatLayout, masonryClasses as classes, type MasonryControls } from "@isbatak/storybook-shared"
import * as masonry from "@isbatak/zag-masonry"
import { normalizeProps, spreadProps, VanillaMachine } from "@zag-js/vanilla"
import { createElement, mount } from "../mount"

const styles = masonryRecipe()

export interface VariableHeightProps extends Partial<MasonryControls> {
  onLayoutChange?: (details: masonry.LayoutChangeDetails) => void
}

export function createVariableHeight(props: VariableHeightProps) {
  const main = createElement(`
    <main class="${classes.story}">
      <div data-el="root" class="${styles.root}">
        <div data-el="item" data-value="1" class="${styles.item}">
          <details class="${classes.details}" style="min-height: 150px">
            <summary class="${classes.summary}">Accordion 1</summary>
            <p class="${classes.content}">Contents</p>
          </details>
        </div>
        <div data-el="item" data-value="2" class="${styles.item}">
          <details class="${classes.details}" style="min-height: 30px">
            <summary class="${classes.summary}">Accordion 2</summary>
            <p class="${classes.content}">Contents</p>
          </details>
        </div>
        <div data-el="item" data-value="3" class="${styles.item}">
          <details class="${classes.details}" style="min-height: 90px">
            <summary class="${classes.summary}">Accordion 3</summary>
            <p class="${classes.content}">Contents</p>
          </details>
        </div>
        <div data-el="item" data-value="4" class="${styles.item}">
          <details class="${classes.details}" style="min-height: 70px">
            <summary class="${classes.summary}">Accordion 4</summary>
            <p class="${classes.content}">Contents</p>
          </details>
        </div>
        <div data-el="item" data-value="5" class="${styles.item}">
          <details class="${classes.details}" style="min-height: 90px">
            <summary class="${classes.summary}">Accordion 5</summary>
            <p class="${classes.content}">Contents</p>
          </details>
        </div>
        <div data-el="item" data-value="6" class="${styles.item}">
          <details class="${classes.details}" style="min-height: 100px">
            <summary class="${classes.summary}">Accordion 6</summary>
            <p class="${classes.content}">Contents</p>
          </details>
        </div>
        <div data-el="item" data-value="7" class="${styles.item}">
          <details class="${classes.details}" style="min-height: 150px">
            <summary class="${classes.summary}">Accordion 7</summary>
            <p class="${classes.content}">Contents</p>
          </details>
        </div>
        <div data-el="item" data-value="8" class="${styles.item}">
          <details class="${classes.details}" style="min-height: 30px">
            <summary class="${classes.summary}">Accordion 8</summary>
            <p class="${classes.content}">Contents</p>
          </details>
        </div>
        <div data-el="item" data-value="9" class="${styles.item}">
          <details class="${classes.details}" style="min-height: 50px">
            <summary class="${classes.summary}">Accordion 9</summary>
            <p class="${classes.content}">Contents</p>
          </details>
        </div>
        <div data-el="item" data-value="10" class="${styles.item}">
          <details class="${classes.details}" style="min-height: 80px">
            <summary class="${classes.summary}">Accordion 10</summary>
            <p class="${classes.content}">Contents</p>
          </details>
        </div>
      </div>
      <output data-testid="layout"></output>
    </main>
  `)
  const root = main.querySelector<HTMLElement>("[data-el=root]")!
  const items = Array.from(root.querySelectorAll<HTMLElement>("[data-el=item]"))

  const machine = new VanillaMachine(masonry.machine, {
    id: crypto.randomUUID(),
    ...props,
  })

  const spread = (node: Element, props: object) => spreadProps(node, props, machine.scope.id)

  function render() {
    const api = masonry.connect(machine.service, normalizeProps)
    spread(root, api.getRootProps())
    for (const item of items) {
      spread(item, api.getItemProps({ value: item.dataset.value!, span: Number(item.dataset.span) || 1 }))
    }
    main.querySelector("[data-testid=layout]")!.textContent = formatLayout(api.columns)
  }

  render()
  machine.subscribe(render)
  return mount(main, [machine])
}
