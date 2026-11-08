import { css } from "styled-system/css"
import { textFlip as textFlipRecipe } from "styled-system/recipes"
import * as textFlip from "@isbatak/zag-text-flip"
import { html, LitElement } from "lit"
import { MachineController, normalizeProps, spread } from "@isbatak/zag-lit"

const styles = textFlipRecipe()

const classes = {
  heading: css({ textStyle: "3xl", fontWeight: "semibold", letterSpacing: "tight" }),
}

export class TextFlipBasic extends LitElement {
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
      <p class=${classes.heading}>
        Build for
        <span ${spread(api.getRootProps())} class=${styles.root}>
          <span ${spread(api.getItemProps({ index: 0 }))} class=${styles.item}>React</span>
          <span ${spread(api.getItemProps({ index: 1 }))} class=${styles.item}>Vue</span>
          <span ${spread(api.getItemProps({ index: 2 }))} class=${styles.item}>Svelte</span>
          <span ${spread(api.getItemProps({ index: 3 }))} class=${styles.item}>Solid</span>
        </span>
      </p>
    `
  }
}

customElements.define("text-flip-basic", TextFlipBasic)
