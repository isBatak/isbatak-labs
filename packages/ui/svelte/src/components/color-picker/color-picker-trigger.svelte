<script module lang="ts">
  import { ColorPicker } from "@ark-ui/svelte/color-picker"

  export type ColorPickerTriggerProps = ColorPicker.TriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import ColorPickerValueSwatch from "./color-picker-value-swatch.svelte"
  import { useColorPickerStyles } from "./color-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: ColorPickerTriggerProps = $props()
  const styles = useColorPickerStyles()
</script>

<ColorPicker.Trigger bind:ref {...props} data-slot="trigger" class={[!unstyled && styles().trigger, className]}>
  {#if children}{@render children()}{:else}<ColorPickerValueSwatch />{/if}
</ColorPicker.Trigger>
