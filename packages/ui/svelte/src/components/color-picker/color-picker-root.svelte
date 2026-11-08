<script module lang="ts">
  import { ColorPicker } from "@ark-ui/svelte/color-picker"
  import { colorPicker, type ColorPickerVariantProps } from "@isbatak/panda-ds/recipes"

  export type ColorPickerRootProps = ColorPicker.RootProps & ColorPickerVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideColorPickerStyles } from "./color-picker-styles"

  let { ref = $bindable(null), value = $bindable(), unstyled, class: className, ...props }: ColorPickerRootProps = $props()
  const [variantProps, localProps] = $derived(colorPicker.splitVariantProps(props))
  const styles = $derived(colorPicker(variantProps))
  provideColorPickerStyles(() => styles)
</script>

<ColorPicker.Root bind:ref bind:value {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
