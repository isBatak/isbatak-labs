<script module lang="ts">
  import { ColorPicker } from "@ark-ui/svelte/color-picker"

  export type ColorPickerChannelSliderLabelProps = ColorPicker.ChannelSliderLabelProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useColorPickerStyles } from "./color-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ColorPickerChannelSliderLabelProps = $props()
  const styles = useColorPickerStyles()
</script>

<ColorPicker.ChannelSliderLabel bind:ref {...props} data-slot="channelSliderLabel" class={[!unstyled && styles().channelSliderLabel, className]} />
