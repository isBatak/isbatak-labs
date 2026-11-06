<script module lang="ts">
  import type { HTMLAttributes } from "svelte/elements"

  export interface RadioCardItemContentProps extends HTMLAttributes<HTMLDivElement> {
    unstyled?: boolean | undefined
    ref?: HTMLDivElement | null
  }
</script>

<script lang="ts">
  import { useRadioCardStyles } from "./radio-card-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: RadioCardItemContentProps = $props()
  const styles = useRadioCardStyles()
</script>

<div bind:this={ref} {...props} data-slot="itemContent" class={[!unstyled && styles().itemContent, className]}>{@render children?.()}</div>
