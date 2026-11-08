<script module lang="ts">
  import { ColorPicker } from "@ark-ui/svelte/color-picker"

  export type ColorPickerControlProps = ColorPicker.ControlProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useColorPickerStyles } from "./color-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ColorPickerControlProps = $props()
  const styles = useColorPickerStyles()
</script>

<ColorPicker.Control bind:ref {...props} data-slot="control" class={[!unstyled && styles().control, className]} />
