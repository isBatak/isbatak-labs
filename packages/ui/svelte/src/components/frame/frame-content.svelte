<script lang="ts">
  import type { Snippet } from "svelte"

  let { onMount, onUnmount, children }: { onMount?: (() => void) | undefined; onUnmount?: (() => void) | undefined; children: Snippet } = $props()

  $effect(() => {
    onMount?.()
    return onUnmount
  })
</script>

{@render children()}
