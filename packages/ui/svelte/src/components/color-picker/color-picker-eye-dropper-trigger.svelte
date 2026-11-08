<script module lang="ts">
  import { ColorPicker } from "@ark-ui/svelte/color-picker"

  export type ColorPickerEyeDropperTriggerProps = ColorPicker.EyeDropperTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useColorPickerStyles } from "./color-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ColorPickerEyeDropperTriggerProps = $props()
  const styles = useColorPickerStyles()
</script>

<ColorPicker.EyeDropperTrigger bind:ref {...props} data-slot="eyeDropperTrigger" class={[!unstyled && styles().eyeDropperTrigger, className]} />
