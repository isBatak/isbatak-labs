<script module lang="ts">
  import type { HTMLAttributes } from "svelte/elements"

  export interface PopoverBodyProps extends HTMLAttributes<HTMLDivElement> {
    unstyled?: boolean | undefined
    ref?: HTMLDivElement | null
  }
</script>

<script lang="ts">
  import { usePopoverStyles } from "./popover-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: PopoverBodyProps = $props()
  const styles = usePopoverStyles()
</script>

<div bind:this={ref} {...props} data-slot="body" class={[!unstyled && styles().body, className]}>{@render children?.()}</div>
