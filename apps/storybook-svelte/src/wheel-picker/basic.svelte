<script lang="ts">
  import { frameworkItems, type WheelPickerControls } from "@isbatak/storybook-shared"
  import type * as wheelPicker from "@isbatak/zag-wheel-picker"
  import Picker from "./picker.svelte"

  interface Props extends Partial<WheelPickerControls> {
    onValueChange?: (details: wheelPicker.ValueChangeDetails) => void
  }

  const { onValueChange, ...controls }: Props = $props()
  let value = $state("react")
</script>

<main class="wheel-picker">
  <Picker
    {...controls}
    label="Framework"
    name="framework"
    items={frameworkItems}
    defaultValue="react"
    onValueChange={(details) => {
      value = details.value
      onValueChange?.(details)
    }}
  />
  <output data-testid="value">Selected: {value}</output>
</main>
