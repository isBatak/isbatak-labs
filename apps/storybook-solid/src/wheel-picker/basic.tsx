import { frameworkItems, type WheelPickerControls } from "@isbatak/storybook-shared"
import type * as wheelPicker from "@isbatak/zag-wheel-picker"
import { createSignal } from "solid-js"
import { Picker } from "./picker"

export interface BasicProps extends Partial<WheelPickerControls> {
  onValueChange?: (details: wheelPicker.ValueChangeDetails) => void
}

export function Basic(props: BasicProps) {
  const [value, setValue] = createSignal("react")

  return (
    <main class="wheel-picker">
      <Picker
        {...props}
        label="Framework"
        name="framework"
        items={frameworkItems}
        defaultValue="react"
        onValueChange={(details) => {
          setValue(details.value)
          props.onValueChange?.(details)
        }}
      />
      <output data-testid="value">Selected: {value()}</output>
    </main>
  )
}
