<script module lang="ts">
  import type { HTMLAttributes } from "svelte/elements"

  export interface TimerItemLabelProps extends HTMLAttributes<HTMLSpanElement> {
    unstyled?: boolean | undefined
    ref?: HTMLSpanElement | null
  }
</script>

<script lang="ts">
  import { useTimerStyles } from "./timer-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: TimerItemLabelProps = $props()
  const styles = useTimerStyles()
</script>

<span bind:this={ref} {...props} data-slot="itemLabel" class={[!unstyled && styles().itemLabel, className]}>{@render children?.()}</span>
