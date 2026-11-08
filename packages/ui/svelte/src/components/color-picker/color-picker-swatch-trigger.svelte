<script module lang="ts">
  import { ColorPicker } from "@ark-ui/svelte/color-picker"

  export type ColorPickerSwatchTriggerProps = ColorPicker.SwatchTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useColorPickerStyles } from "./color-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ColorPickerSwatchTriggerProps = $props()
  const styles = useColorPickerStyles()
</script>

<ColorPicker.SwatchTrigger bind:ref {...props} data-slot="swatchTrigger" class={[!unstyled && styles().swatchTrigger, className]} />
