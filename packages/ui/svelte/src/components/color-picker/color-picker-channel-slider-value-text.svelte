<script module lang="ts">
  import { ColorPicker } from "@ark-ui/svelte/color-picker"

  export type ColorPickerChannelSliderValueTextProps = ColorPicker.ChannelSliderValueTextProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useColorPickerStyles } from "./color-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ColorPickerChannelSliderValueTextProps = $props()
  const styles = useColorPickerStyles()
</script>

<ColorPicker.ChannelSliderValueText bind:ref {...props} data-slot="channelSliderValueText" class={[!unstyled && styles().channelSliderValueText, className]} />
