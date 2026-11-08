import { controlledItems } from "@isbatak/storybook-shared"
import { html, LitElement } from "lit"
import { define } from "../define"
import { PickerController, renderPicker } from "./picker"

export class Controlled extends LitElement {
  static properties = {
    value: { state: true },
  }

  declare value: string

  readonly #picker = new PickerController(this, () => ({
    items: controlledItems,
    value: this.value,
    onValueChange: (details) => {
      this.value = details.value
    },
  }))

  constructor() {
    super()
    this.value = "react"
  }

  protected createRenderRoot() {
    return this
  }

  render() {
    return html`
      <main class="wheel-picker">
        ${renderPicker(this.#picker, "Framework")}

        <div class="wheel-picker-actions">
          <button type="button" @click=${() => (this.value = "react")}>Select React</button>
          <button type="button" @click=${() => (this.value = "svelte")}>Select Svelte</button>
        </div>

        <output data-testid="value">Controlled value: ${this.value}</output>
      </main>
    `
  }
}

define("wheel-picker-controlled", Controlled)
