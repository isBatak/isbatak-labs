<script module lang="ts">
  import { Slider } from "@ark-ui/svelte/slider"

  export type SliderControlProps = Slider.ControlProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useSliderStyles } from "./slider-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: SliderControlProps = $props()
  const styles = useSliderStyles()
</script>

<Slider.Control bind:ref {...props} data-slot="control" class={[!unstyled && styles().control, className]} />
