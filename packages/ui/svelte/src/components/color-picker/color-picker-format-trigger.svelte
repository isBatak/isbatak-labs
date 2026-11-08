<script module lang="ts">
  import { ColorPicker } from "@ark-ui/svelte/color-picker"

  export type ColorPickerFormatTriggerProps = ColorPicker.FormatTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useColorPickerStyles } from "./color-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ColorPickerFormatTriggerProps = $props()
  const styles = useColorPickerStyles()
</script>

<ColorPicker.FormatTrigger bind:ref {...props} data-slot="formatTrigger" class={[!unstyled && styles().formatTrigger, className]} />
