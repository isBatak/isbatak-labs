<script module lang="ts">
  import type { ColorPickerChannelInputProps } from "./color-picker-channel-input.svelte"

  export type ColorPickerInputProps = Omit<ColorPickerChannelInputProps, "channel">
</script>

<script lang="ts">
  import ColorPickerChannelInput from "./color-picker-channel-input.svelte"

  let { ref = $bindable(null), ...props }: ColorPickerInputProps = $props()
</script>

<ColorPickerChannelInput bind:ref channel="hex" {...props} />
