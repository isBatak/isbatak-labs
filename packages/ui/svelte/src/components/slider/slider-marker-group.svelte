<script module lang="ts">
  import { Slider } from "@ark-ui/svelte/slider"

  export type SliderMarkerGroupProps = Slider.MarkerGroupProps
</script>

<script lang="ts">
  import { useSliderStyles } from "./slider-styles"

  let { ref = $bindable(null), class: className, ...props }: SliderMarkerGroupProps = $props()
  const styles = useSliderStyles()
</script>

<Slider.MarkerGroup bind:ref {...props} data-slot="markerGroup" class={[styles().markerGroup, className]} />
