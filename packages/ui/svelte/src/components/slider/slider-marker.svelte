<script module lang="ts">
  import { Slider } from "@ark-ui/svelte/slider"

  export type SliderMarkerProps = Slider.MarkerProps
</script>

<script lang="ts">
  import { useSliderStyles } from "./slider-styles"

  let { ref = $bindable(null), class: className, ...props }: SliderMarkerProps = $props()
  const styles = useSliderStyles()
</script>

<Slider.Marker bind:ref {...props} data-slot="marker" class={[styles().marker, className]} />
