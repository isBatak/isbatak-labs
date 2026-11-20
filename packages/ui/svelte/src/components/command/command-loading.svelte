<script module lang="ts">
  import type { HTMLAttributes } from "svelte/elements"

  export type CommandLoadingProps = HTMLAttributes<HTMLDivElement> & {
    ref?: HTMLDivElement | null
    unstyled?: boolean | undefined
  }
</script>

<script lang="ts">
  import { useCommandContext, useCommandStyles } from "./command-context"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: CommandLoadingProps = $props()
  const styles = useCommandStyles()
  const context = useCommandContext()
</script>

{#if context.loading}
  <div bind:this={ref} {...props} data-slot="loading" class={[!unstyled && styles().loading, className]}>
    {@render children?.()}
  </div>
{/if}
