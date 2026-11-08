import { frameworkItems, type WheelPickerControls } from "@isbatak/storybook-shared"
import type * as wheelPicker from "@isbatak/zag-wheel-picker"
import { html, LitElement } from "lit"
import { define } from "../define"
import { PickerController, renderPicker } from "./picker"

export interface BasicProps extends Partial<WheelPickerControls> {
  onValueChange?: (details: wheelPicker.ValueChangeDetails) => void
}

export class Basic extends LitElement {
  static properties = {
    disabled: { type: Boolean },
    loop: { type: Boolean },
    visibleCount: { type: Number },
    itemHeight: { type: Number },
    onValueChange: { attribute: false },
    value: { state: true },
  }

  declare disabled: boolean | undefined
  declare loop: boolean | undefined
  declare visibleCount: number | undefined
  declare itemHeight: number | undefined
  declare onValueChange: ((details: wheelPicker.ValueChangeDetails) => void) | undefined
  declare value: string

  readonly #picker = new PickerController(this, () => ({
    items: frameworkItems,
    name: "framework",
    value: this.value,
    disabled: this.disabled,
    loop: this.loop,
    visibleCount: this.visibleCount,
    itemHeight: this.itemHeight,
    onValueChange: (details) => {
      this.value = details.value
      this.onValueChange?.(details)
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
        <output data-testid="value">Selected: ${this.value}</output>
      </main>
    `
  }
}

define("wheel-picker-basic", Basic)
