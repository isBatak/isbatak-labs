<script module lang="ts">
  import { AngleSlider } from "@ark-ui/svelte/angle-slider"

  export type AngleSliderControlProps = AngleSlider.ControlProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useAngleSliderStyles } from "./angle-slider-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: AngleSliderControlProps = $props()
  const styles = useAngleSliderStyles()
</script>

<AngleSlider.Control bind:ref {...props} data-slot="control" class={[!unstyled && styles().control, className]} />
