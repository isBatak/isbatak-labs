<script module lang="ts">
  import type { Snippet } from "svelte"
  import type { HTMLAttributes } from "svelte/elements"

  export interface SwitchThumbIndicatorProps extends HTMLAttributes<HTMLSpanElement> {
    fallback?: Snippet | undefined
  }
</script>

<script lang="ts">
  import { useSwitchContext } from "@ark-ui/svelte/switch"

  let { fallback, children, class: className, ...props }: SwitchThumbIndicatorProps = $props()
  const api = useSwitchContext()
</script>

<span data-checked={api().checked ? "" : undefined} {...props} class={className}>
  {#if api().checked}{@render children?.()}{:else}{@render fallback?.()}{/if}
</span>
