<script module lang="ts">
  import { Slider } from "@ark-ui/svelte/slider"

  export type SliderValueTextProps = Slider.ValueTextProps
</script>

<script lang="ts">
  import { useSliderStyles } from "./slider-styles"

  let { ref = $bindable(null), class: className, ...props }: SliderValueTextProps = $props()
  const styles = useSliderStyles()
</script>

<Slider.ValueText bind:ref {...props} data-slot="valueText" class={[styles().valueText, className]} />
