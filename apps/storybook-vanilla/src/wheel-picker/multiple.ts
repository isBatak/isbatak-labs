import { hourItems, meridiemItems, minuteItems } from "@isbatak/storybook-shared"
import { createElement, mount } from "../mount"
import { createPicker } from "./picker"

export function createMultiple() {
  const main = createElement(`
    <main class="wheel-picker">
      <div class="wheel-picker-group" role="group" aria-label="Time"></div>
      <output class="wheel-picker-output"></output>
    </main>
  `)
  const group = main.querySelector<HTMLElement>(".wheel-picker-group")!
  const output = main.querySelector<HTMLOutputElement>(".wheel-picker-output")!
  const time = { hour: "9", minute: "41", meridiem: "AM" }
  const renderOutput = () => (output.textContent = `Selected time: ${time.hour}:${time.minute} ${time.meridiem}`)

  const pickers = [
    createPicker({
      label: "Hour",
      name: "hour",
      items: hourItems,
      value: time.hour,
      loop: true,
      onValueChange: ({ value }) => ((time.hour = value), renderOutput()),
    }),
    createPicker({
      label: "Minute",
      name: "minute",
      items: minuteItems,
      value: time.minute,
      loop: true,
      onValueChange: ({ value }) => ((time.minute = value), renderOutput()),
    }),
    createPicker({
      label: "Meridiem",
      name: "meridiem",
      items: meridiemItems,
      value: time.meridiem,
      onValueChange: ({ value }) => ((time.meridiem = value), renderOutput()),
    }),
  ]
  group.append(...pickers.map((picker) => picker.element))
  renderOutput()
  return mount(main, pickers)
}
