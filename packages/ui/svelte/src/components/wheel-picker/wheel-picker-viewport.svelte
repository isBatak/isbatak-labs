<script module lang="ts">
  import { WheelPicker } from "@isbatak/ark-wheel-picker/svelte"

  export type WheelPickerViewportProps = WheelPicker.ViewportProps
</script>

<script lang="ts">
  import { useWheelPickerStyles } from "./wheel-picker-styles"

  let { ref = $bindable(null), class: className, ...props }: WheelPickerViewportProps = $props()
  const styles = useWheelPickerStyles()
</script>

<WheelPicker.Viewport bind:ref {...props} data-slot="viewport" class={[styles().viewport, className]} />
