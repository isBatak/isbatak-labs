<script module lang="ts">
  import { ColorPicker } from "@ark-ui/svelte/color-picker"

  export type ColorPickerFormatSelectProps = ColorPicker.FormatSelectProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useColorPickerStyles } from "./color-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ColorPickerFormatSelectProps = $props()
  const styles = useColorPickerStyles()
</script>

<ColorPicker.FormatSelect bind:ref {...props} data-slot="formatSelect" class={[!unstyled && styles().formatSelect, className]} />
