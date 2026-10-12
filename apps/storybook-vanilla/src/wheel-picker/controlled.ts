import { controlledItems } from "@isbatak/storybook-shared"
import { createElement, mount } from "../mount"
import { createPicker } from "./picker"

export function createControlled() {
  const main = createElement(`
    <main class="wheel-picker">
      <div class="wheel-picker-actions">
        <button type="button" data-value="react">Select React</button>
        <button type="button" data-value="svelte">Select Svelte</button>
      </div>
      <output class="wheel-picker-output">Controlled value: react</output>
    </main>
  `)
  const output = main.querySelector<HTMLOutputElement>(".wheel-picker-output")!
  const picker = createPicker({
    label: "Framework",
    items: controlledItems,
    value: "react",
    onValueChange(details) {
      output.textContent = `Controlled value: ${details.value}`
    },
  })
  main.prepend(picker.element)
  main.querySelectorAll<HTMLButtonElement>("[data-value]").forEach((button) =>
    button.addEventListener("click", () => {
      picker.setValue(button.dataset.value!)
      output.textContent = `Controlled value: ${button.dataset.value}`
    }),
  )
  return mount(main, [picker])
}
