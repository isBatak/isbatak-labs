<script module lang="ts">
  import { ColorPicker } from "@ark-ui/svelte/color-picker"

  export type ColorPickerAreaThumbProps = ColorPicker.AreaThumbProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useColorPickerStyles } from "./color-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ColorPickerAreaThumbProps = $props()
  const styles = useColorPickerStyles()
</script>

<ColorPicker.AreaThumb bind:ref {...props} data-slot="areaThumb" class={[!unstyled && styles().areaThumb, className]} />
