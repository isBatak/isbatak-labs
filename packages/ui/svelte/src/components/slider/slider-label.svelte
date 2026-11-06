<script module lang="ts">
  import { Slider } from "@ark-ui/svelte/slider"

  export type SliderLabelProps = Slider.LabelProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useSliderStyles } from "./slider-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: SliderLabelProps = $props()
  const styles = useSliderStyles()
</script>

<Slider.Label bind:ref {...props} data-slot="label" class={[!unstyled && styles().label, className]} />
