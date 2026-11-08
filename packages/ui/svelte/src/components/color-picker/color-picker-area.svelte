<script module lang="ts">
  import { ColorPicker } from "@ark-ui/svelte/color-picker"

  export type ColorPickerAreaProps = ColorPicker.AreaProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import ColorPickerAreaBackground from "./color-picker-area-background.svelte"
  import ColorPickerAreaThumb from "./color-picker-area-thumb.svelte"
  import { useColorPickerStyles } from "./color-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: ColorPickerAreaProps = $props()
  const styles = useColorPickerStyles()
</script>

<ColorPicker.Area bind:ref {...props} data-slot="area" class={[!unstyled && styles().area, className]}>
  {#if children}{@render children()}{:else}<ColorPickerAreaBackground /><ColorPickerAreaThumb />{/if}
</ColorPicker.Area>
