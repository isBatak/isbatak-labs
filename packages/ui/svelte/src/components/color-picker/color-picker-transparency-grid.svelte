<script module lang="ts">
  import { ColorPicker } from "@ark-ui/svelte/color-picker"

  export type ColorPickerTransparencyGridProps = ColorPicker.TransparencyGridProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useColorPickerStyles } from "./color-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ColorPickerTransparencyGridProps = $props()
  const styles = useColorPickerStyles()
</script>

<ColorPicker.TransparencyGrid bind:ref {...props} data-slot="transparencyGrid" class={[!unstyled && styles().transparencyGrid, className]} />
