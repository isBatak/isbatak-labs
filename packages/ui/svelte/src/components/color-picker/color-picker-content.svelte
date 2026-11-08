<script module lang="ts">
  import { ColorPicker } from "@ark-ui/svelte/color-picker"

  export type ColorPickerContentProps = ColorPicker.ContentProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useColorPickerStyles } from "./color-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ColorPickerContentProps = $props()
  const styles = useColorPickerStyles()
</script>

<ColorPicker.Content bind:ref {...props} data-slot="content" class={[!unstyled && styles().content, className]} />
