<script module lang="ts">
  import { AngleSlider } from "@ark-ui/svelte/angle-slider"

  export type AngleSliderMarkerGroupProps = AngleSlider.MarkerGroupProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useAngleSliderStyles } from "./angle-slider-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: AngleSliderMarkerGroupProps = $props()
  const styles = useAngleSliderStyles()
</script>

<AngleSlider.MarkerGroup bind:ref {...props} data-slot="markerGroup" class={[!unstyled && styles().markerGroup, className]} />
