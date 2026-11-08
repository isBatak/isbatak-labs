<script module lang="ts">
  import { ColorPicker } from "@ark-ui/svelte/color-picker"
  import { colorPicker, type ColorPickerVariantProps } from "@isbatak/panda-ds/recipes"

  export type ColorPickerRootProviderProps = ColorPicker.RootProviderProps & ColorPickerVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideColorPickerStyles } from "./color-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ColorPickerRootProviderProps = $props()
  const [variantProps, localProps] = $derived(colorPicker.splitVariantProps(props))
  const styles = $derived(colorPicker(variantProps))
  provideColorPickerStyles(() => styles)
</script>

<ColorPicker.RootProvider bind:ref {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
