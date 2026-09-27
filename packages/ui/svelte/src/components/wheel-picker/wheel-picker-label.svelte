<script module lang="ts">
  import { WheelPicker } from "@isbatak/ark-wheel-picker/svelte"

  export type WheelPickerLabelProps = WheelPicker.LabelProps
</script>

<script lang="ts">
  import { useWheelPickerStyles } from "./wheel-picker-styles"

  let { ref = $bindable(null), class: className, ...props }: WheelPickerLabelProps = $props()
  const styles = useWheelPickerStyles()
</script>

<WheelPicker.Label bind:ref {...props} data-slot="label" class={[styles().label, className]} />
