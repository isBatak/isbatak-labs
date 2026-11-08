<script module lang="ts">
  import { ColorPicker } from "@ark-ui/svelte/color-picker"

  export type ColorPickerAreaBackgroundProps = ColorPicker.AreaBackgroundProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useColorPickerStyles } from "./color-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ColorPickerAreaBackgroundProps = $props()
  const styles = useColorPickerStyles()
</script>

<ColorPicker.AreaBackground bind:ref {...props} data-slot="areaBackground" class={[!unstyled && styles().areaBackground, className]} />
