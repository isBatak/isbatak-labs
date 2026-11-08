import { css } from "styled-system/css"
import { textFlip as textFlipRecipe } from "styled-system/recipes"
import * as textFlip from "@isbatak/zag-text-flip"
import { html, LitElement } from "lit"
import { MachineController, normalizeProps, spread } from "@isbatak/zag-lit"

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
    cursor: "button",
    _hover: { bg: "bg.muted" },
  }),
}

export class TextFlipControls extends LitElement {
  readonly #id = crypto.randomUUID()
  readonly #machine = new MachineController(this, textFlip.machine, () => ({
    id: this.#id,
  }))

  protected createRenderRoot() {
    return this
  }

  render() {
    const api = textFlip.connect(this.#machine.service, normalizeProps)

    return html`
      <div class=${classes.stack}>
        <p class=${classes.heading}>
          <span ${spread(api.getRootProps())} class=${styles.root}>
            <span ${spread(api.getItemProps({ index: 0 }))} class=${styles.item}>Hello</span>
            <span ${spread(api.getItemProps({ index: 1 }))} class=${styles.item}>Bonjour</span>
            <span ${spread(api.getItemProps({ index: 2 }))} class=${styles.item}>Hola</span>
            <span ${spread(api.getItemProps({ index: 3 }))} class=${styles.item}>Ciao</span>
            <span ${spread(api.getItemProps({ index: 4 }))} class=${styles.item}>Hallo</span>
          </span>
        </p>
        <div class=${classes.actions}>
          <button type="button" class=${classes.button} @click=${() => api.prev()}>Previous</button>
          <button type="button" class=${classes.button} @click=${() => (api.playing ? api.pause() : api.play())}>
            ${api.playing ? "Pause" : "Play"}
          </button>
          <button type="button" class=${classes.button} @click=${() => api.next()}>Next</button>
        </div>
      </div>
    `
  }
}

customElements.define("text-flip-controls", TextFlipControls)
