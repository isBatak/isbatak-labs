import { masonry as masonryRecipe } from "@isbatak/storybook-shared/recipes"
import {
  formatLayout,
  initialMasonryTiles,
  masonryClasses as classes,
  nextMasonryTile,
  type MasonryControls,
} from "@isbatak/storybook-shared"
import * as masonry from "@isbatak/zag-masonry"
import { normalizeProps, spreadProps, VanillaMachine } from "@zag-js/vanilla"
import { createElement, mount } from "../mount"

const styles = masonryRecipe()

export interface DynamicProps extends Partial<MasonryControls> {
  onLayoutChange?: (details: masonry.LayoutChangeDetails) => void
}

export function createDynamic(props: DynamicProps) {
  const main = createElement(`
    <main class="${classes.story}">
      <div class="${classes.actions}">
        <button type="button" class="add ${classes.button}">Add item</button>
        <button type="button" class="remove ${classes.button}">Remove first item</button>
      </div>
      <div data-el="root" class="${styles.root}"></div>
      <output data-testid="layout"></output>
    </main>
  `)
  const root = main.querySelector<HTMLElement>("[data-el=root]")!
  const rows = new Map<string, HTMLElement>()
  let tiles = initialMasonryTiles

  const machine = new VanillaMachine(masonry.machine, {
    id: crypto.randomUUID(),
    ...props,
  })

  const spread = (node: Element, props: object) => spreadProps(node, props, machine.scope.id)

  function createRow(height: number, value: string) {
    return createElement(`
      <div class="${styles.item}">
        <div class="${classes.tile}" style="height: ${height}px">${value}</div>
      </div>
    `)
  }

  main.querySelector(".add")!.addEventListener("click", () => {
    tiles = [...tiles, nextMasonryTile(tiles)]
    render()
  })

  main.querySelector(".remove")!.addEventListener("click", () => {
    tiles = tiles.slice(1)
    render()
  })

  function render() {
    const api = masonry.connect(machine.service, normalizeProps)
    spread(root, api.getRootProps())

    for (const value of rows.keys()) {
      if (!tiles.some((tile) => tile.value === value)) rows.delete(value)
    }

    const elements = tiles.map((tile) => {
      const row = rows.get(tile.value) ?? createRow(tile.height, tile.value)
      rows.set(tile.value, row)
      spread(row, api.getItemProps({ value: tile.value }))
      return row
    })

    if (
      elements.some((element, index) => root.children[index] !== element) ||
      root.children.length !== elements.length
    ) {
      root.replaceChildren(...elements)
    }

    main.querySelector("[data-testid=layout]")!.textContent = formatLayout(api.columns)
  }

  render()
  machine.subscribe(render)
  return mount(main, [machine])
}
