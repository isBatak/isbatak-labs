<script module lang="ts">
  import type { SliderThumbProps } from "./slider-thumb.svelte"

  export type SliderThumbsProps = Omit<SliderThumbProps, "index">
</script>

<script lang="ts">
  import { Slider, useSliderContext } from "@ark-ui/svelte/slider"

  import SliderThumb from "./slider-thumb.svelte"

  let props: SliderThumbsProps = $props()
  const slider = useSliderContext()
</script>

{#each slider().value as _, index (index)}
  <SliderThumb {index} {...props}>
    <Slider.HiddenInput />
  </SliderThumb>
{/each}
