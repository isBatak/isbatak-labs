<script module lang="ts">
  import type { StackProps } from "../stack"

  export type ColorPickerSlidersProps = StackProps
</script>

<script lang="ts">
  import { css } from "@isbatak/panda-ds/css"
  import type { Component } from "svelte"

  import { Stack } from "../stack"
  import ColorPickerChannelSlider from "./color-picker-channel-slider.svelte"

  const DivStack = Stack as Component<StackProps<"div">, {}, "ref">

  let { class: className, ...props }: ColorPickerSlidersProps = $props()
</script>

<DivStack gap="1" class={[css({ flex: "1" }), className]} {...props}>
  <ColorPickerChannelSlider channel="hue" />
  <ColorPickerChannelSlider channel="alpha" />
</DivStack>
