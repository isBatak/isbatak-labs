<script module lang="ts">
  import type { HTMLAttributes } from "svelte/elements"

  export interface MenuBackdropProps extends HTMLAttributes<HTMLDivElement> {
    unstyled?: boolean | undefined
    ref?: HTMLDivElement | null
  }
</script>

<script lang="ts">
  import { usePresenceContext } from "@ark-ui/svelte/presence"
  import { useMenuStyles } from "./menu-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: MenuBackdropProps = $props()
  const presence = usePresenceContext()
  const styles = useMenuStyles()
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
