import { controlledItems } from "@isbatak/storybook-shared"
import { createSignal } from "solid-js"
import { Picker } from "./picker"

export function Controlled() {
  const [value, setValue] = createSignal("react")

  return (
    <main class="wheel-picker">
      <Picker
        label="Framework"
        items={controlledItems}
        value={value()}
        onValueChange={(details) => setValue(details.value)}
      />
      <div class="wheel-picker-actions">
        <button type="button" onClick={() => setValue("react")}>
          Select React
        </button>
        <button type="button" onClick={() => setValue("svelte")}>
          Select Svelte
        </button>
      </div>
      <output data-testid="value">Controlled value: {value()}</output>
    </main>
  )
}
