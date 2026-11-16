<script module lang="ts">
  import type { HTMLAttributes } from "svelte/elements"

  export type CommandIndicatorProps = HTMLAttributes<HTMLDivElement> & {
    ref?: HTMLDivElement | null
    unstyled?: boolean | undefined
  }
</script>

<script lang="ts">
  import { Icon } from "../icon"
  import { useCommandContext, useCommandStyles } from "./command-context"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: CommandIndicatorProps = $props()
  const styles = useCommandStyles()
  const context = useCommandContext()
</script>

<div
  bind:this={ref}
  {...props}
  data-loading={context.loading ? "" : undefined}
  data-slot="indicator"
  class={[!unstyled && styles().indicator, className]}
>
  {#if children}{@render children()}{:else}<Icon name="search" />{/if}
</div>
