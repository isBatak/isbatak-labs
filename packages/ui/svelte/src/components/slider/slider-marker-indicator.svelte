<script module lang="ts">
  import type { HTMLAttributes } from "svelte/elements"

  export interface SliderMarkerIndicatorProps extends HTMLAttributes<HTMLDivElement> {
    unstyled?: boolean | undefined
    ref?: HTMLDivElement | null
  }
</script>

<script lang="ts">
  import { useSliderStyles } from "./slider-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: SliderMarkerIndicatorProps = $props()
  const styles = useSliderStyles()
</script>

<div bind:this={ref} {...props} data-slot="markerIndicator" class={[!unstyled && styles().markerIndicator, className]}>{@render children?.()}</div>
