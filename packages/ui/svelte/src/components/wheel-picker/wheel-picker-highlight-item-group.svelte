<script module lang="ts">
  import { WheelPicker } from "@isbatak/ark-wheel-picker/svelte"

  export type WheelPickerHighlightItemGroupProps = WheelPicker.HighlightItemGroupProps
</script>

<script lang="ts">
  import { useWheelPickerStyles } from "./wheel-picker-styles"

  let { ref = $bindable(null), class: className, ...props }: WheelPickerHighlightItemGroupProps = $props()
  const styles = useWheelPickerStyles()
</script>

<WheelPicker.HighlightItemGroup bind:ref {...props} data-slot="highlightItemGroup" class={[styles().highlightItemGroup, className]} />
