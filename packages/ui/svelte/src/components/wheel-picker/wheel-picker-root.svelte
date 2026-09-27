<script module lang="ts">
  import { WheelPicker } from "@isbatak/ark-wheel-picker/svelte"
  import { wheelPicker, type WheelPickerVariantProps } from "@isbatak/panda-ds/recipes"

  export type WheelPickerRootProps = WheelPicker.RootProps & WheelPickerVariantProps
</script>

<script lang="ts">
  import { provideWheelPickerStyles } from "./wheel-picker-styles"

  let { ref = $bindable(null), value = $bindable(), class: className, ...props }: WheelPickerRootProps = $props()
  const [variantProps, localProps] = $derived(wheelPicker.splitVariantProps(props))
  const styles = $derived(wheelPicker(variantProps))
  provideWheelPickerStyles(() => styles)
</script>

<WheelPicker.Root bind:ref bind:value {...localProps} data-slot="root" class={[styles.root, className]} />
