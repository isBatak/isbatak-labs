<script module lang="ts">
  import { ColorPicker } from "@ark-ui/svelte/color-picker"

  export type ColorPickerValueTextProps = ColorPicker.ValueTextProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useColorPickerStyles } from "./color-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ColorPickerValueTextProps = $props()
  const styles = useColorPickerStyles()
</script>

<ColorPicker.ValueText bind:ref {...props} data-slot="valueText" class={[!unstyled && styles().valueText, className]} />
