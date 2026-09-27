<script module lang="ts">
  import { Slider } from "@ark-ui/svelte/slider"

  export type SliderControlProps = Slider.ControlProps
</script>

<script lang="ts">
  import { useSliderStyles } from "./slider-styles"

  let { ref = $bindable(null), class: className, ...props }: SliderControlProps = $props()
  const styles = useSliderStyles()
</script>

<Slider.Control bind:ref {...props} data-slot="control" class={[styles().control, className]} />
