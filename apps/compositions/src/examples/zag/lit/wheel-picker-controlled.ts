import { css } from "styled-system/css"
import { wheelPicker as wheelPickerRecipe } from "styled-system/recipes"
import * as wheelPicker from "@isbatak/zag-wheel-picker"
import { html, LitElement, type PropertyValues } from "lit"
import { repeat } from "lit/directives/repeat.js"
import { normalizeProps, spread } from "@isbatak/zag-lit"

const items = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Svelte", value: "svelte" },
  { label: "Solid", value: "solid" },
]

const styles = wheelPickerRecipe()

const classes = {
  root: css({ display: "grid", gap: "4" }),
  actions: css({ display: "flex", justifyContent: "center", gap: "2" }),
  button: css({
    px: "3",
    py: "1.5",
    borderWidth: "1px",
    borderRadius: "l2",
    textStyle: "sm",
    cursor: "button",
    _hover: { bg: "bg.muted" },
  }),
  output: css({ color: "fg.muted", textStyle: "sm", textAlign: "center" }),
}

export class WheelPickerControlled extends LitElement {
  static properties = {
    value: {},
  }

  declare value: string

  readonly #id = crypto.randomUUID()
  readonly #picker = wheelPicker.createWheelPicker()
  #stop: (() => void) | undefined

  constructor() {
    super()
    this.value = "react"
  }

  #props(): wheelPicker.Props {
    return {
      id: this.#id,
      items,
      value: this.value,
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
      <div class=${classes.root}>
        <div ${spread(api.getRootProps())} class=${styles.root}>
          <span ${spread(api.getLabelProps())} class=${styles.label}>Framework</span>
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
        <div class=${classes.actions}>
          <button type="button" class=${classes.button} @click=${() => (this.value = "react")}>React</button>
          <button type="button" class=${classes.button} @click=${() => (this.value = "svelte")}>Svelte</button>
        </div>
        <output class=${classes.output}>Value: ${this.value}</output>
      </div>
    `
  }
}

customElements.define("wheel-picker-controlled", WheelPickerControlled)
