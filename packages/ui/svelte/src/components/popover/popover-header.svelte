<script module lang="ts">
  import type { HTMLAttributes } from "svelte/elements"

  export interface PopoverHeaderProps extends HTMLAttributes<HTMLDivElement> {
    ref?: HTMLDivElement | null
  }
</script>

<script lang="ts">
  import { usePopoverStyles } from "./popover-styles"

  let { ref = $bindable(null), class: className, children, ...props }: PopoverHeaderProps = $props()
  const styles = usePopoverStyles()
</script>

<div bind:this={ref} {...props} data-slot="header" class={[styles().header, className]}>{@render children?.()}</div>
