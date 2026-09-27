<script module lang="ts">
  import { WheelPicker } from "@isbatak/ark-wheel-picker/svelte"

  export type WheelPickerControlProps = WheelPicker.ControlProps
</script>

<script lang="ts">
  import { useWheelPickerStyles } from "./wheel-picker-styles"

  let { ref = $bindable(null), class: className, ...props }: WheelPickerControlProps = $props()
  const styles = useWheelPickerStyles()
</script>

<WheelPicker.Control bind:ref {...props} data-slot="control" class={[styles().control, className]} />
