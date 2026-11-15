<script module lang="ts">
  import { AngleSlider } from "@ark-ui/svelte/angle-slider"

  export type AngleSliderThumbProps = AngleSlider.ThumbProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useAngleSliderStyles } from "./angle-slider-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: AngleSliderThumbProps = $props()
  const styles = useAngleSliderStyles()
</script>

<AngleSlider.Thumb bind:ref {...props} data-slot="thumb" class={[!unstyled && styles().thumb, className]} />
