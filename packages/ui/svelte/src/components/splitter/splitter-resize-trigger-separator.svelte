<script module lang="ts">
  import type { HTMLAttributes } from "svelte/elements"

  export interface SplitterResizeTriggerSeparatorProps extends HTMLAttributes<HTMLDivElement> {
    unstyled?: boolean | undefined
    ref?: HTMLDivElement | null
  }
</script>

<script lang="ts">
  import { useSplitterStyles } from "./splitter-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: SplitterResizeTriggerSeparatorProps = $props()
  const styles = useSplitterStyles()
</script>

<div
  bind:this={ref}
  {...props}
  data-slot="resizeTriggerSeparator"
  class={[!unstyled && styles().resizeTriggerSeparator, className]}
></div>
