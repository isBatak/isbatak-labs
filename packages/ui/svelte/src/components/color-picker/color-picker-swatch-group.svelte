<script module lang="ts">
  import { ColorPicker } from "@ark-ui/svelte/color-picker"

  export type ColorPickerSwatchGroupProps = ColorPicker.SwatchGroupProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useColorPickerStyles } from "./color-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ColorPickerSwatchGroupProps = $props()
  const styles = useColorPickerStyles()
</script>

<ColorPicker.SwatchGroup bind:ref {...props} data-slot="swatchGroup" class={[!unstyled && styles().swatchGroup, className]} />
