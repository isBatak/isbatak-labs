import { frameworkItems, type WheelPickerControls } from "@isbatak/storybook-shared"
import type * as wheelPicker from "@isbatak/zag-wheel-picker"
import { createElement, mount } from "../mount"
import { createPicker } from "./picker"

export interface BasicProps extends Partial<WheelPickerControls> {
  onValueChange?: (details: wheelPicker.ValueChangeDetails) => void
}

export function createBasic(props: BasicProps) {
  const main = createElement(`
    <main class="wheel-picker">
      <output class="wheel-picker-output">Selected: react</output>
    </main>
  `)
  const output = main.querySelector<HTMLOutputElement>(".wheel-picker-output")!
  const picker = createPicker({
    ...props,
    label: "Framework",
    name: "framework",
    items: frameworkItems,
    value: "react",
    onValueChange(details) {
      output.textContent = `Selected: ${details.value}`
      props.onValueChange?.(details)
    },
  })
  main.prepend(picker.element)
  return mount(main, [picker])
}
