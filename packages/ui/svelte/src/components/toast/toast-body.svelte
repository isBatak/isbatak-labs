<script module lang="ts">
  import type { HTMLAttributes } from "svelte/elements"

  export interface ToastBodyProps extends HTMLAttributes<HTMLDivElement> {
    unstyled?: boolean | undefined
    ref?: HTMLDivElement | null
  }
</script>

<script lang="ts">
  import { useToastStyles } from "./toast-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: ToastBodyProps = $props()
  const styles = useToastStyles()
</script>

<div bind:this={ref} {...props} data-slot="body" class={[!unstyled && styles().body, className]}>{@render children?.()}</div>
