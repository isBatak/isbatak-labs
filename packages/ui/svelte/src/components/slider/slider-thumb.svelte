<script module lang="ts">
  import { Slider } from "@ark-ui/svelte/slider"

  export type SliderThumbProps = Slider.ThumbProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useSliderStyles } from "./slider-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: SliderThumbProps = $props()
  const styles = useSliderStyles()
</script>

<Slider.Thumb bind:ref {...props} data-slot="thumb" class={[!unstyled && styles().thumb, className]} />
