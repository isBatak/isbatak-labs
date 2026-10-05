import { masonry as masonryRecipe } from "@isbatak/storybook-shared/recipes"
import { formatLayout, masonryClasses as classes, type MasonryControls } from "@isbatak/storybook-shared"
import * as masonry from "@isbatak/zag-masonry"
import { normalizeProps, spreadProps, VanillaMachine } from "@zag-js/vanilla"
import { createElement, mount } from "../mount"

const styles = masonryRecipe()

export interface ImagesProps extends Partial<MasonryControls> {
  onLayoutChange?: (details: masonry.LayoutChangeDetails) => void
}

export function createImages(props: ImagesProps) {
  const main = createElement(`
    <main class="${classes.story}">
      <div data-el="root" class="${styles.root}">
        <div data-el="item" data-value="1" class="${styles.item}">
          <img
            srcset="https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?w=162&auto=format&dpr=2 2x"
            src="https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?w=162&auto=format"
            alt="Fern"
            loading="lazy"
            class="${classes.image}"
          >
        </div>
        <div data-el="item" data-value="2" class="${styles.item}">
          <img
            srcset="https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=162&auto=format&dpr=2 2x"
            src="https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=162&auto=format"
            alt="Snacks"
            loading="lazy"
            class="${classes.image}"
          >
        </div>
        <div data-el="item" data-value="3" class="${styles.item}">
          <img
            srcset="https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=162&auto=format&dpr=2 2x"
            src="https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=162&auto=format"
            alt="Mushrooms"
            loading="lazy"
            class="${classes.image}"
          >
        </div>
        <div data-el="item" data-value="4" class="${styles.item}">
          <img
            srcset="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=162&auto=format&dpr=2 2x"
            src="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=162&auto=format"
            alt="Tower"
            loading="lazy"
            class="${classes.image}"
          >
        </div>
        <div data-el="item" data-value="5" class="${styles.item}">
          <img
            srcset="https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=162&auto=format&dpr=2 2x"
            src="https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=162&auto=format"
            alt="Sea star"
            loading="lazy"
            class="${classes.image}"
          >
        </div>
        <div data-el="item" data-value="6" class="${styles.item}">
          <img
            srcset="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=162&auto=format&dpr=2 2x"
            src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=162&auto=format"
            alt="Honey"
            loading="lazy"
            class="${classes.image}"
          >
        </div>
        <div data-el="item" data-value="7" class="${styles.item}">
          <img
            srcset="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=162&auto=format&dpr=2 2x"
            src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=162&auto=format"
            alt="Basketball"
            loading="lazy"
            class="${classes.image}"
          >
        </div>
        <div data-el="item" data-value="8" class="${styles.item}">
          <img
            srcset="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=162&auto=format&dpr=2 2x"
            src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=162&auto=format"
            alt="Breakfast"
            loading="lazy"
            class="${classes.image}"
          >
        </div>
        <div data-el="item" data-value="9" class="${styles.item}">
          <img
            srcset="https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d?w=162&auto=format&dpr=2 2x"
            src="https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d?w=162&auto=format"
            alt="Tree"
            loading="lazy"
            class="${classes.image}"
          >
        </div>
        <div data-el="item" data-value="10" class="${styles.item}">
          <img
            srcset="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=162&auto=format&dpr=2 2x"
            src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=162&auto=format"
            alt="Burger"
            loading="lazy"
            class="${classes.image}"
          >
        </div>
        <div data-el="item" data-value="11" class="${styles.item}">
          <img
            srcset="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=162&auto=format&dpr=2 2x"
            src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=162&auto=format"
            alt="Camera"
            loading="lazy"
            class="${classes.image}"
          >
        </div>
        <div data-el="item" data-value="12" class="${styles.item}">
          <img
            srcset="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=162&auto=format&dpr=2 2x"
            src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=162&auto=format"
            alt="Coffee"
            loading="lazy"
            class="${classes.image}"
          >
        </div>
        <div data-el="item" data-value="13" class="${styles.item}">
          <img
            srcset="https://images.unsplash.com/photo-1627000086207-76eabf23aa2e?w=162&auto=format&dpr=2 2x"
            src="https://images.unsplash.com/photo-1627000086207-76eabf23aa2e?w=162&auto=format"
            alt="Camping Car"
            loading="lazy"
            class="${classes.image}"
          >
        </div>
        <div data-el="item" data-value="14" class="${styles.item}">
          <img
            srcset="https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=162&auto=format&dpr=2 2x"
            src="https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=162&auto=format"
            alt="Hats"
            loading="lazy"
            class="${classes.image}"
          >
        </div>
        <div data-el="item" data-value="15" class="${styles.item}">
          <img
            srcset="https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=162&auto=format&dpr=2 2x"
            src="https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=162&auto=format"
            alt="Tomato basil"
            loading="lazy"
            class="${classes.image}"
          >
        </div>
        <div data-el="item" data-value="16" class="${styles.item}">
          <img
            srcset="https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7?w=162&auto=format&dpr=2 2x"
            src="https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7?w=162&auto=format"
            alt="Mountain"
            loading="lazy"
            class="${classes.image}"
          >
        </div>
        <div data-el="item" data-value="17" class="${styles.item}">
          <img
            srcset="https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=162&auto=format&dpr=2 2x"
            src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=162&auto=format"
            alt="Bike"
            loading="lazy"
            class="${classes.image}"
          >
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
