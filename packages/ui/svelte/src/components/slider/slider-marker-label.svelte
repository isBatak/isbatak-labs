<script module lang="ts">
  import type { HTMLAttributes } from "svelte/elements"

  export interface SliderMarkerLabelProps extends HTMLAttributes<HTMLSpanElement> {
    ref?: HTMLSpanElement | null
  }
</script>

<script lang="ts">
  import { useSliderStyles } from "./slider-styles"

  let { ref = $bindable(null), class: className, children, ...props }: SliderMarkerLabelProps = $props()
  const styles = useSliderStyles()
</script>

<span bind:this={ref} {...props} data-slot="markerLabel" class={[styles().markerLabel, className]}>{@render children?.()}</span>
