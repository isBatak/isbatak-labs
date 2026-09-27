<script module lang="ts">
  import type { HTMLAttributes } from "svelte/elements"

  export interface RadioCardItemAddonProps extends HTMLAttributes<HTMLDivElement> {
    ref?: HTMLDivElement | null
  }
</script>

<script lang="ts">
  import { useRadioCardStyles } from "./radio-card-styles"

  let { ref = $bindable(null), class: className, children, ...props }: RadioCardItemAddonProps = $props()
  const styles = useRadioCardStyles()
</script>

<div bind:this={ref} {...props} data-slot="itemAddon" class={[styles().itemAddon, className]}>{@render children?.()}</div>
