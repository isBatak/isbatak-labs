import { textFlip as textFlipRecipe } from "@isbatak/storybook-shared/recipes"
import { formatTextFlip, textFlipClasses as classes, type TextFlipControls } from "@isbatak/storybook-shared"
import * as textFlip from "@isbatak/zag-text-flip"
import { normalizeProps, spreadProps, VanillaMachine } from "@zag-js/vanilla"
import { createElement, mount } from "../mount"

const styles = textFlipRecipe()

export interface ControlsProps extends Partial<TextFlipControls> {
  onIndexChange?: (details: textFlip.IndexChangeDetails) => void
}

export function createControls(props: ControlsProps) {
  const main = createElement(`
    <main class="${classes.story}">
      <h1 class="${classes.heading}">
        <span data-el="root" class="${styles.root}">
          <span data-el="item" class="${styles.item}">Hello</span>
          <span data-el="item" class="${styles.item}">Bonjour</span>
          <span data-el="item" class="${styles.item}">Hola</span>
          <span data-el="item" class="${styles.item}">Ciao</span>
          <span data-el="item" class="${styles.item}">Hallo</span>
        </span>
      </h1>
      <div class="${classes.actions}">
        <button type="button" data-el="prev" class="${classes.button}">Previous</button>
        <button type="button" data-el="toggle" class="${classes.button}">Pause</button>
        <button type="button" data-el="next" class="${classes.button}">Next</button>
        <button type="button" data-el="first" class="${classes.button}">First</button>
      </div>
      <output data-testid="status" class="${classes.status}"></output>
    </main>
  `)
  const root = main.querySelector<HTMLElement>("[data-el=root]")!
  const items = Array.from(root.querySelectorAll<HTMLElement>("[data-el=item]"))
  const toggle = main.querySelector<HTMLButtonElement>("[data-el=toggle]")!
  const status = main.querySelector<HTMLOutputElement>("[data-testid=status]")!

  const machine = new VanillaMachine(textFlip.machine, {
    id: crypto.randomUUID(),
    ...props,
  })

  const api = () => textFlip.connect(machine.service, normalizeProps)
  const spread = (node: Element, props: object) => spreadProps(node, props, machine.scope.id)

  main.querySelector("[data-el=prev]")!.addEventListener("click", () => api().prev())
  main.querySelector("[data-el=next]")!.addEventListener("click", () => api().next())
  main.querySelector("[data-el=first]")!.addEventListener("click", () => api().goTo(0))
  toggle.addEventListener("click", () => (api().playing ? api().pause() : api().play()))

  function render() {
    const current = api()
    spread(root, current.getRootProps())
    items.forEach((item, index) => spread(item, current.getItemProps({ index })))
    toggle.textContent = current.playing ? "Pause" : "Play"
    status.textContent = formatTextFlip(current.index, items.length, current.playing)
  }

  render()
  machine.subscribe(render)
  return mount(main, [machine])
}
