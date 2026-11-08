<script module lang="ts">
  import { ColorPicker } from "@ark-ui/svelte/color-picker"

  export type ColorPickerChannelSliderThumbProps = ColorPicker.ChannelSliderThumbProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useColorPickerStyles } from "./color-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ColorPickerChannelSliderThumbProps = $props()
  const styles = useColorPickerStyles()
</script>

<ColorPicker.ChannelSliderThumb bind:ref {...props} data-slot="channelSliderThumb" class={[!unstyled && styles().channelSliderThumb, className]} />
