<script module lang="ts">
  import { Slider } from "@ark-ui/svelte/slider"

  export type SliderThumbProps = Slider.ThumbProps
</script>

<script lang="ts">
  import { useSliderStyles } from "./slider-styles"

  let { ref = $bindable(null), class: className, ...props }: SliderThumbProps = $props()
  const styles = useSliderStyles()
</script>

<Slider.Thumb bind:ref {...props} data-slot="thumb" class={[styles().thumb, className]} />
