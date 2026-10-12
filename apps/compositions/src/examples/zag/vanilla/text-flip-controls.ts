import { css } from "styled-system/css"
import { textFlip as textFlipRecipe } from "styled-system/recipes"
import * as textFlip from "@isbatak/zag-text-flip"
import { normalizeProps, spreadProps, VanillaMachine } from "@zag-js/vanilla"

const styles = textFlipRecipe()

const classes = {
  stack: css({ display: "grid", justifyItems: "center", gap: "6" }),
  heading: css({ textStyle: "3xl", fontWeight: "semibold", letterSpacing: "tight" }),
  actions: css({ display: "flex", gap: "2" }),
  button: css({
    px: "3",
    py: "1.5",
    borderWidth: "1px",
    borderRadius: "l2",
    textStyle: "sm",
    cursor: "pointer",
    _hover: { bg: "bg.muted" },
  }),
}

export function createTextFlipControls(container: HTMLElement) {
  container.innerHTML = `
    <div class="${classes.stack}">
      <p class="${classes.heading}">
        <span data-el="root" class="${styles.root}">
          <span data-el="item" class="${styles.item}">Hello</span>
          <span data-el="item" class="${styles.item}">Bonjour</span>
          <span data-el="item" class="${styles.item}">Hola</span>
          <span data-el="item" class="${styles.item}">Ciao</span>
          <span data-el="item" class="${styles.item}">Hallo</span>
        </span>
      </p>
      <div class="${classes.actions}">
        <button type="button" data-el="prev" class="${classes.button}">Previous</button>
        <button type="button" data-el="toggle" class="${classes.button}">Pause</button>
        <button type="button" data-el="next" class="${classes.button}">Next</button>
      </div>
    </div>
  `

  const root = container.querySelector<HTMLElement>("[data-el=root]")!
  const items = Array.from(root.querySelectorAll<HTMLElement>("[data-el=item]"))
  const prev = container.querySelector<HTMLButtonElement>("[data-el=prev]")!
  const toggle = container.querySelector<HTMLButtonElement>("[data-el=toggle]")!
  const next = container.querySelector<HTMLButtonElement>("[data-el=next]")!

  const machine = new VanillaMachine(textFlip.machine, {
    id: crypto.randomUUID(),
  })

  const api = () => textFlip.connect(machine.service, normalizeProps)
  const spread = (node: Element, props: object) => spreadProps(node, props, machine.scope.id)

  prev.addEventListener("click", () => api().prev())
  toggle.addEventListener("click", () => (api().playing ? api().pause() : api().play()))
  next.addEventListener("click", () => api().next())

  const render = () => {
    const current = api()
    spread(root, current.getRootProps())
    items.forEach((item, index) => spread(item, current.getItemProps({ index })))
    toggle.textContent = current.playing ? "Pause" : "Play"
  }

  render()
  machine.subscribe(render)
  machine.start()

  return () => {
    machine.stop()
    container.replaceChildren()
  }
}
