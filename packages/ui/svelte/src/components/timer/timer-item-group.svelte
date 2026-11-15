<script module lang="ts">
  import type { HTMLAttributes } from "svelte/elements"

  export interface TimerItemGroupProps extends HTMLAttributes<HTMLDivElement> {
    unstyled?: boolean | undefined
    ref?: HTMLDivElement | null
  }
</script>

<script lang="ts">
  import { useTimerStyles } from "./timer-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: TimerItemGroupProps = $props()
  const styles = useTimerStyles()
</script>

<div bind:this={ref} {...props} data-slot="itemGroup" class={[!unstyled && styles().itemGroup, className]}>{@render children?.()}</div>
