<script module lang="ts">
  import type { HTMLAttributes } from "svelte/elements"

  export interface PopoverFooterProps extends HTMLAttributes<HTMLDivElement> {
    ref?: HTMLDivElement | null
  }
</script>

<script lang="ts">
  import { usePopoverStyles } from "./popover-styles"

  let { ref = $bindable(null), class: className, children, ...props }: PopoverFooterProps = $props()
  const styles = usePopoverStyles()
</script>

<div bind:this={ref} {...props} data-slot="footer" class={[styles().footer, className]}>{@render children?.()}</div>
