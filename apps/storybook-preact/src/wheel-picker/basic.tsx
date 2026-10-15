import { frameworkItems, type WheelPickerControls } from "@isbatak/storybook-shared"
import type * as wheelPicker from "@isbatak/zag-wheel-picker"
import { useState } from "preact/hooks"
import { Picker } from "./picker"

export interface BasicProps extends Partial<WheelPickerControls> {
  onValueChange?: (details: wheelPicker.ValueChangeDetails) => void
}

export function Basic(props: BasicProps) {
  const { onValueChange, ...controls } = props
  const [value, setValue] = useState("react")

  return (
    <main className="wheel-picker">
      <Picker
        {...controls}
        label="Framework"
        name="framework"
        items={frameworkItems}
        defaultValue="react"
        onValueChange={(details) => {
          setValue(details.value)
          onValueChange?.(details)
        }}
      />
      <output data-testid="value">Selected: {value}</output>
    </main>
  )
}
