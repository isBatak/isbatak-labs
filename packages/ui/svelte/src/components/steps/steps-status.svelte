<script module lang="ts">
  import type { Snippet } from "svelte"

  export interface StepsStatusProps {
    complete: Snippet
    incomplete: Snippet
    current?: Snippet | undefined
  }
</script>

<script lang="ts">
  import { useStepsItemContext } from "@ark-ui/svelte/steps"

  let { complete, incomplete, current }: StepsStatusProps = $props()
  const item = useStepsItemContext()
</script>

{#if item().current}
  {@render (current ?? incomplete)()}
{:else if item().completed}
  {@render complete()}
{:else}
  {@render incomplete()}
{/if}
