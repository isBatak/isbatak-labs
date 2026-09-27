<script module lang="ts">
  import { Slider } from "@ark-ui/svelte/slider"

  export type SliderRangeProps = Slider.RangeProps
</script>

<script lang="ts">
  import { useSliderStyles } from "./slider-styles"

  let { ref = $bindable(null), class: className, ...props }: SliderRangeProps = $props()
  const styles = useSliderStyles()
</script>

<Slider.Range bind:ref {...props} data-slot="range" class={[styles().range, className]} />
