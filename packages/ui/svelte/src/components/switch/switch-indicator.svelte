<script module lang="ts">
  import type { Snippet } from "svelte"
  import type { HTMLAttributes } from "svelte/elements"

  export interface SwitchIndicatorProps extends HTMLAttributes<HTMLSpanElement> {
    fallback?: Snippet | undefined
  }
</script>

<script lang="ts">
  import { useSwitchContext } from "@ark-ui/svelte/switch"
  import { useSwitchStyles } from "./switch-styles"

  let { fallback, children, class: className, ...props }: SwitchIndicatorProps = $props()
  const api = useSwitchContext()
  const styles = useSwitchStyles()
</script>

<span data-checked={api().checked ? "" : undefined} {...props} data-slot="indicator" class={[styles().indicator, className]}>
  {#if api().checked}{@render children?.()}{:else}{@render fallback?.()}{/if}
</span>
