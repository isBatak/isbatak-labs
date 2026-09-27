<script module lang="ts">
  import { WheelPicker } from "@isbatak/ark-wheel-picker/svelte"

  export type WheelPickerItemProps = WheelPicker.ItemProps
</script>

<script lang="ts">
  import { useWheelPickerStyles } from "./wheel-picker-styles"

  let { ref = $bindable(null), class: className, ...props }: WheelPickerItemProps = $props()
  const styles = useWheelPickerStyles()
</script>

<WheelPicker.Item bind:ref {...props} data-slot="item" class={[styles().item, className]} />
