<script module lang="ts">
  import { ColorPicker } from "@ark-ui/svelte/color-picker"

  export type ColorPickerViewProps = ColorPicker.ViewProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useColorPickerStyles } from "./color-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ColorPickerViewProps = $props()
  const styles = useColorPickerStyles()
</script>

<ColorPicker.View bind:ref {...props} data-slot="view" class={[!unstyled && styles().view, className]} />
