<script module lang="ts">
  import { WheelPicker } from "@isbatak/ark-wheel-picker/svelte"

  export type WheelPickerHighlightItemProps = WheelPicker.HighlightItemProps
</script>

<script lang="ts">
  import { useWheelPickerStyles } from "./wheel-picker-styles"

  let { ref = $bindable(null), class: className, ...props }: WheelPickerHighlightItemProps = $props()
  const styles = useWheelPickerStyles()
</script>

<WheelPicker.HighlightItem bind:ref {...props} data-slot="highlightItem" class={[styles().highlightItem, className]} />
