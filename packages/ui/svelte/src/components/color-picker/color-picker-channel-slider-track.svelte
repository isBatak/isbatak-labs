<script module lang="ts">
  import { ColorPicker } from "@ark-ui/svelte/color-picker"

  export type ColorPickerChannelSliderTrackProps = ColorPicker.ChannelSliderTrackProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useColorPickerStyles } from "./color-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ColorPickerChannelSliderTrackProps = $props()
  const styles = useColorPickerStyles()
</script>

<ColorPicker.ChannelSliderTrack bind:ref {...props} data-slot="channelSliderTrack" class={[!unstyled && styles().channelSliderTrack, className]} />
