<script module lang="ts">
  import type { HTMLAttributes } from "svelte/elements"

  export interface ActionBarPositionerProps extends HTMLAttributes<HTMLDivElement> {
    unstyled?: boolean | undefined
    ref?: HTMLDivElement | null
  }
</script>

<script lang="ts">
  import { useActionBarStyles } from "./action-bar-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: ActionBarPositionerProps = $props()
  const styles = useActionBarStyles()
</script>

<div bind:this={ref} {...props} data-slot="positioner" class={[!unstyled && styles().positioner, className]}>{@render children?.()}</div>
