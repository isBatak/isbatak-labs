<script module lang="ts">
  import type { HTMLAttributes } from "svelte/elements"

  export interface MenuItemCommandProps extends HTMLAttributes<HTMLElement> {
    unstyled?: boolean | undefined
    ref?: HTMLElement | null
  }
</script>

<script lang="ts">
  import { useMenuStyles } from "./menu-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: MenuItemCommandProps = $props()
  const styles = useMenuStyles()
</script>

<kbd bind:this={ref} {...props} data-slot="itemCommand" class={[!unstyled && styles().itemCommand, className]}>{@render children?.()}</kbd>
