<script module lang="ts">
  import { ColorPicker } from "@ark-ui/svelte/color-picker"

  export type ColorPickerChannelSliderProps = ColorPicker.ChannelSliderProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import ColorPickerChannelSliderThumb from "./color-picker-channel-slider-thumb.svelte"
  import ColorPickerChannelSliderTrack from "./color-picker-channel-slider-track.svelte"
  import ColorPickerTransparencyGrid from "./color-picker-transparency-grid.svelte"
  import { useColorPickerStyles } from "./color-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: ColorPickerChannelSliderProps = $props()
  const styles = useColorPickerStyles()
</script>

<ColorPicker.ChannelSlider bind:ref {...props} data-slot="channelSlider" class={[!unstyled && styles().channelSlider, className]}>
  {#if children}{@render children()}{:else}<ColorPickerTransparencyGrid size="0.6rem" /><ColorPickerChannelSliderTrack /><ColorPickerChannelSliderThumb />{/if}
</ColorPicker.ChannelSlider>
