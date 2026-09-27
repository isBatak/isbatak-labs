<script module lang="ts">
  import { WheelPicker } from "@isbatak/ark-wheel-picker/svelte"

  export type WheelPickerHighlightProps = WheelPicker.HighlightProps
</script>

<script lang="ts">
  import { useWheelPickerStyles } from "./wheel-picker-styles"

  let { ref = $bindable(null), class: className, ...props }: WheelPickerHighlightProps = $props()
  const styles = useWheelPickerStyles()
</script>

<WheelPicker.Highlight bind:ref {...props} data-slot="highlight" class={[styles().highlight, className]} />
