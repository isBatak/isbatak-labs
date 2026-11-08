<script module lang="ts">
  import { ColorPicker } from "@ark-ui/svelte/color-picker"

  export type ColorPickerValueSwatchProps = ColorPicker.ValueSwatchProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useColorPickerStyles } from "./color-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ColorPickerValueSwatchProps = $props()
  const styles = useColorPickerStyles()
</script>

<ColorPicker.ValueSwatch bind:ref {...props} data-slot="swatch" class={[!unstyled && styles().swatch, className]} />
