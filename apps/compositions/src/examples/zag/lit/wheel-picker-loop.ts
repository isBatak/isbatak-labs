import { wheelPicker as wheelPickerRecipe } from "styled-system/recipes"
import * as wheelPicker from "@isbatak/zag-wheel-picker"
import { html, LitElement, type PropertyValues } from "lit"
import { repeat } from "lit/directives/repeat.js"
import { normalizeProps, spread } from "@isbatak/zag-lit"

const items = Array.from({ length: 60 }, (_, minute) => {
  const label = String(minute).padStart(2, "0")
  return { label, value: label }
})

const styles = wheelPickerRecipe()

export class WheelPickerLoop extends LitElement {
  static properties = {
    value: {},
  }

  declare value: string

  readonly #id = crypto.randomUUID()
  readonly #picker = wheelPicker.createWheelPicker()
  #stop: (() => void) | undefined

  constructor() {
    super()
    this.value = "30"
  }

  #props(): wheelPicker.Props {
    return {
      id: this.#id,
      items,
      value: this.value,
      loop: true,
      onValueChange: (details) => {
        this.value = details.value
      },
    }
  }

  protected createRenderRoot() {
    return this
  }

  connectedCallback() {
    super.connectedCallback()
    this.requestUpdate()
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.#stop?.()
    this.#stop = undefined
  }

  protected updated(changed: PropertyValues<this>) {
    this.#stop ??= this.#picker.mount(() => this.#props())
    if (changed.has("value")) this.#picker.sync(this.#props())
  }

  render() {
    const api = this.#picker.connect(this.#props(), normalizeProps)

    return html`
      <div ${spread(api.getRootProps())} class=${styles.root}>
        <span ${spread(api.getLabelProps())} class=${styles.label}>Minute</span>
        <div ${spread(api.getControlProps())} class=${styles.control}>
          <div ${spread(api.getViewportProps())} class=${styles.viewport}>
            <div ${spread(api.getItemGroupProps())} class=${styles.itemGroup}>
              ${repeat(
                api.rows,
                ({ row }) => row,
                ({ row, item }) =>
                  html`<div ${spread(api.getItemProps({ row }))} class=${styles.item}>${item.label}</div>`,
              )}
            </div>
          </div>
          <div ${spread(api.getHighlightProps())} class=${styles.highlight}></div>
        </div>
        <input ${spread(api.getHiddenInputProps())} />
      </div>
    `
  }
}

customElements.define("wheel-picker-loop", WheelPickerLoop)
