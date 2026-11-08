<script module lang="ts">
  import { ColorPicker } from "@ark-ui/svelte/color-picker"

  export type ColorPickerPositionerProps = ColorPicker.PositionerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useColorPickerStyles } from "./color-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ColorPickerPositionerProps = $props()
  const styles = useColorPickerStyles()
</script>

<ColorPicker.Positioner bind:ref {...props} data-slot="positioner" class={[!unstyled && styles().positioner, className]} />
