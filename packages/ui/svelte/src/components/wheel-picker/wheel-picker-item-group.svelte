<script module lang="ts">
  import { WheelPicker } from "@isbatak/ark-wheel-picker/svelte"

  export type WheelPickerItemGroupProps = WheelPicker.ItemGroupProps
</script>

<script lang="ts">
  import { useWheelPickerStyles } from "./wheel-picker-styles"

  let { ref = $bindable(null), class: className, ...props }: WheelPickerItemGroupProps = $props()
  const styles = useWheelPickerStyles()
</script>

<WheelPicker.ItemGroup bind:ref {...props} data-slot="itemGroup" class={[styles().itemGroup, className]} />
