<script module lang="ts">
  import type { HTMLAttributes } from "svelte/elements"

  export interface PopoverBackdropProps extends HTMLAttributes<HTMLDivElement> {
    unstyled?: boolean | undefined
    ref?: HTMLDivElement | null
  }
</script>

<script lang="ts">
  import { usePresenceContext } from "@ark-ui/svelte/presence"
  import { usePopoverStyles } from "./popover-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: PopoverBackdropProps = $props()
  const presence = usePresenceContext()
  const styles = usePopoverStyles()
</script>

{#if !presence().unmounted}
  <div
    bind:this={ref}
    {...presence().getPresenceProps()}
    {...props}
    data-slot="backdrop"
    class={[!unstyled && styles().backdrop, className]}
  >
    {@render children?.()}
  </div>
{/if}
