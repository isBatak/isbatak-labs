<script module lang="ts">
  import { Slider } from "@ark-ui/svelte/slider"

  export type SliderRangeProps = Slider.RangeProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useSliderStyles } from "./slider-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: SliderRangeProps = $props()
  const styles = useSliderStyles()
</script>

<Slider.Range bind:ref {...props} data-slot="range" class={[!unstyled && styles().range, className]} />
