import { controlledItems } from "@isbatak/storybook-shared"
import { useState } from "react"
import { Picker } from "./picker"

export function Controlled() {
  const [value, setValue] = useState("react")

  return (
    <main className="wheel-picker">
      <Picker
        label="Framework"
        items={controlledItems}
        value={value}
        onValueChange={(details) => setValue(details.value)}
      />

      <div className="wheel-picker-actions">
        <button type="button" onClick={() => setValue("react")}>
          Select React
        </button>
        <button type="button" onClick={() => setValue("svelte")}>
          Select Svelte
        </button>
      </div>

      <output data-testid="value">Controlled value: {value}</output>
    </main>
  )
}
