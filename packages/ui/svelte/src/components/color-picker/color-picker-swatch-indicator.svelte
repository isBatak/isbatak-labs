<script module lang="ts">
  import { ColorPicker } from "@ark-ui/svelte/color-picker"

  export type ColorPickerSwatchIndicatorProps = ColorPicker.SwatchIndicatorProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { Icon } from "../icon"
  import { useColorPickerStyles } from "./color-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: ColorPickerSwatchIndicatorProps = $props()
  const styles = useColorPickerStyles()
</script>

<ColorPicker.SwatchIndicator bind:ref {...props} data-slot="swatchIndicator" class={[!unstyled && styles().swatchIndicator, className]}>
  {#if children}{@render children()}{:else}<Icon name="check" />{/if}
</ColorPicker.SwatchIndicator>
