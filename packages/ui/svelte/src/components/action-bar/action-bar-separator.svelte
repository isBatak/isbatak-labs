<script module lang="ts">
  import type { HTMLAttributes } from "svelte/elements"

  export interface ActionBarSeparatorProps extends HTMLAttributes<HTMLDivElement> {
    unstyled?: boolean | undefined
    ref?: HTMLDivElement | null
  }
</script>

<script lang="ts">
  import { useActionBarStyles } from "./action-bar-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: ActionBarSeparatorProps = $props()
  const styles = useActionBarStyles()
</script>

<div bind:this={ref} {...props} data-slot="separator" class={[!unstyled && styles().separator, className]}>{@render children?.()}</div>
