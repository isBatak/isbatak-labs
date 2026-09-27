<script module lang="ts">
  import { Slider } from "@ark-ui/svelte/slider"

  export type SliderTrackProps = Slider.TrackProps
</script>

<script lang="ts">
  import { useSliderStyles } from "./slider-styles"

  let { ref = $bindable(null), class: className, ...props }: SliderTrackProps = $props()
  const styles = useSliderStyles()
</script>

<Slider.Track bind:ref {...props} data-slot="track" class={[styles().track, className]} />
