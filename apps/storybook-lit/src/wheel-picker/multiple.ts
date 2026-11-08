import { hourItems, meridiemItems, minuteItems } from "@isbatak/storybook-shared"
import { html, LitElement } from "lit"
import { define } from "../define"
import { PickerController, renderPicker } from "./picker"

export class Multiple extends LitElement {
  static properties = {
    hour: { state: true },
    minute: { state: true },
    meridiem: { state: true },
  }

  declare hour: string
  declare minute: string
  declare meridiem: string

  readonly #hour = new PickerController(this, () => ({
    items: hourItems,
    name: "hour",
    value: this.hour,
    loop: true,
    onValueChange: (details) => {
      this.hour = details.value
    },
  }))

  readonly #minute = new PickerController(this, () => ({
    items: minuteItems,
    name: "minute",
    value: this.minute,
    loop: true,
    onValueChange: (details) => {
      this.minute = details.value
    },
  }))

  readonly #meridiem = new PickerController(this, () => ({
    items: meridiemItems,
    name: "meridiem",
    value: this.meridiem,
    onValueChange: (details) => {
      this.meridiem = details.value
    },
  }))

  constructor() {
    super()
    this.hour = "9"
    this.minute = "41"
    this.meridiem = "AM"
  }

  protected createRenderRoot() {
    return this
  }

  render() {
    return html`
      <main class="wheel-picker">
        <div class="wheel-picker-group" role="group" aria-label="Time">
          ${renderPicker(this.#hour, "Hour")} ${renderPicker(this.#minute, "Minute")}
          ${renderPicker(this.#meridiem, "Meridiem")}
        </div>

        <output data-testid="value">Selected time: ${this.hour}:${this.minute} ${this.meridiem}</output>
      </main>
    `
  }
}

define("wheel-picker-multiple", Multiple)
