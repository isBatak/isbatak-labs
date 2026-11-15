<script module lang="ts">
  import { AngleSlider } from "@ark-ui/svelte/angle-slider"

  export type AngleSliderLabelProps = AngleSlider.LabelProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useAngleSliderStyles } from "./angle-slider-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: AngleSliderLabelProps = $props()
  const styles = useAngleSliderStyles()
</script>

<AngleSlider.Label bind:ref {...props} data-slot="label" class={[!unstyled && styles().label, className]} />
