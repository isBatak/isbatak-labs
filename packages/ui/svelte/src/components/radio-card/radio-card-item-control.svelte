<script module lang="ts">
  import type { HTMLAttributes } from "svelte/elements"

  export interface RadioCardItemControlProps extends HTMLAttributes<HTMLDivElement> {
    ref?: HTMLDivElement | null
  }
</script>

<script lang="ts">
  import { useRadioCardStyles } from "./radio-card-styles"

  let { ref = $bindable(null), class: className, children, ...props }: RadioCardItemControlProps = $props()
  const styles = useRadioCardStyles()
</script>

<div bind:this={ref} {...props} data-slot="itemControl" class={[styles().itemControl, className]}>{@render children?.()}</div>
