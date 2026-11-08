<script module lang="ts">
  import { ColorPicker } from "@ark-ui/svelte/color-picker"

  export type ColorPickerChannelInputProps = ColorPicker.ChannelInputProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useColorPickerStyles } from "./color-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ColorPickerChannelInputProps = $props()
  const styles = useColorPickerStyles()
</script>

<ColorPicker.ChannelInput bind:ref {...props} data-slot="channelInput" class={[!unstyled && styles().channelInput, className]} />
