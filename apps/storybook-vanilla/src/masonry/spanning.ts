import { masonry as masonryRecipe } from "@isbatak/storybook-shared/recipes"
import { formatLayout, masonryClasses as classes, type MasonryControls } from "@isbatak/storybook-shared"
import * as masonry from "@isbatak/zag-masonry"
import { normalizeProps, spreadProps } from "@zag-js/vanilla"
import { createElement, mount } from "../mount"

const styles = masonryRecipe()

export interface SpanningProps extends Partial<MasonryControls> {
  onLayoutChange?: (details: masonry.LayoutChangeDetails) => void
}

export function createSpanning(props: SpanningProps) {
  const main = createElement(`
    <main class="${classes.story}">
      <div data-el="root" class="${styles.root}">
        <div data-el="item" data-value="1" data-span="2" class="${styles.item}">
          <div class="${classes.tile}" style="height: 120px">1</div>
        </div>
        <div data-el="item" data-value="2" class="${styles.item}">
          <div class="${classes.tile}" style="height: 80px">2</div>
        </div>
        <div data-el="item" data-value="3" class="${styles.item}">
          <div class="${classes.tile}" style="height: 150px">3</div>
        </div>
        <div data-el="item" data-value="4" class="${styles.item}">
          <div class="${classes.tile}" style="height: 60px">4</div>
        </div>
        <div data-el="item" data-value="5" data-span="2" class="${styles.item}">
          <div class="${classes.tile}" style="height: 90px">5</div>
        </div>
        <div data-el="item" data-value="6" class="${styles.item}">
          <div class="${classes.tile}" style="height: 110px">6</div>
        </div>
        <div data-el="item" data-value="7" class="${styles.item}">
          <div class="${classes.tile}" style="height: 70px">7</div>
        </div>
        <div data-el="item" data-value="8" data-span="3" class="${styles.item}">
          <div class="${classes.tile}" style="height: 130px">8</div>
        </div>
        <div data-el="item" data-value="9" class="${styles.item}">
          <div class="${classes.tile}" style="height: 50px">9</div>
        </div>
        <div data-el="item" data-value="10" class="${styles.item}">
          <div class="${classes.tile}" style="height: 100px">10</div>
        </div>
        <div data-el="item" data-value="11" data-span="2" class="${styles.item}">
          <div class="${classes.tile}" style="height: 40px">11</div>
        </div>
      </div>
      <output data-testid="layout"></output>
    </main>
  `)
  const root = main.querySelector<HTMLElement>("[data-el=root]")!
  const items = Array.from(root.querySelectorAll<HTMLElement>("[data-el=item]"))

  const controller = masonry.createMasonry()
  const masonryProps: masonry.Props = { id: crypto.randomUUID(), ...props }
  let layout: masonry.Layout | null = null

  const spread = (node: Element, nodeProps: object) => spreadProps(node, nodeProps, masonryProps.id)

  function render() {
    const api = controller.connect(masonryProps, layout, normalizeProps)
    spread(root, api.getRootProps())
    for (const item of items) {
      spread(item, api.getItemProps({ value: item.dataset.value!, span: Number(item.dataset.span) || 1 }))
    }
    main.querySelector("[data-testid=layout]")!.textContent = formatLayout(api.columns)
  }

  render()

  let stop: (() => void) | undefined
  const lifecycle = {
    start() {
      stop = controller.mount(
        () => masonryProps,
        (next) => {
          layout = next
          render()
        },
      )
    },
    stop() {
      stop?.()
    },
  }

  return mount(main, [lifecycle])
}
