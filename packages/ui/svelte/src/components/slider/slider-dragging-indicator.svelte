<script module lang="ts">
  import { Slider } from "@ark-ui/svelte/slider"

  export type SliderDraggingIndicatorProps = Slider.DraggingIndicatorProps
</script>

<script lang="ts">
  import { useSliderStyles } from "./slider-styles"

  let { ref = $bindable(null), class: className, ...props }: SliderDraggingIndicatorProps = $props()
  const styles = useSliderStyles()
</script>

<Slider.DraggingIndicator bind:ref {...props} data-slot="draggingIndicator" class={[styles().draggingIndicator, className]} />
