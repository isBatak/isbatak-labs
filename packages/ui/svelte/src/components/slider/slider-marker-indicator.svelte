<script module lang="ts">
  import type { HTMLAttributes } from "svelte/elements"

  export interface SliderMarkerIndicatorProps extends HTMLAttributes<HTMLDivElement> {
    ref?: HTMLDivElement | null
  }
</script>

<script lang="ts">
  import { useSliderStyles } from "./slider-styles"

  let { ref = $bindable(null), class: className, children, ...props }: SliderMarkerIndicatorProps = $props()
  const styles = useSliderStyles()
</script>

<div bind:this={ref} {...props} data-slot="markerIndicator" class={[styles().markerIndicator, className]}>{@render children?.()}</div>
