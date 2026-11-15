<script module lang="ts">
  import { AngleSlider } from "@ark-ui/svelte/angle-slider"

  export type AngleSliderMarkerProps = AngleSlider.MarkerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useAngleSliderStyles } from "./angle-slider-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: AngleSliderMarkerProps = $props()
  const styles = useAngleSliderStyles()
</script>

<AngleSlider.Marker bind:ref {...props} data-slot="marker" class={[!unstyled && styles().marker, className]} />
