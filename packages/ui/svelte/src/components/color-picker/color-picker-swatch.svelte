<script module lang="ts">
  import { ColorPicker } from "@ark-ui/svelte/color-picker"

  export type ColorPickerSwatchProps = ColorPicker.SwatchProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useColorPickerStyles } from "./color-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ColorPickerSwatchProps = $props()
  const styles = useColorPickerStyles()
</script>

<ColorPicker.Swatch bind:ref {...props} data-slot="swatch" class={[!unstyled && styles().swatch, className]} />
