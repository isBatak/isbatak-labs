<script module lang="ts">
  import { ColorPicker } from "@ark-ui/svelte/color-picker"

  export type ColorPickerLabelProps = ColorPicker.LabelProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useColorPickerStyles } from "./color-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ColorPickerLabelProps = $props()
  const styles = useColorPickerStyles()
</script>

<ColorPicker.Label bind:ref {...props} data-slot="label" class={[!unstyled && styles().label, className]} />
