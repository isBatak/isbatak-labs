<script module lang="ts">
  import { Splitter } from "@ark-ui/svelte/splitter"

  export type SplitterResizeTriggerProps = Splitter.ResizeTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import SplitterResizeTriggerIndicator from "./splitter-resize-trigger-indicator.svelte"
  import SplitterResizeTriggerSeparator from "./splitter-resize-trigger-separator.svelte"
  import { useSplitterStyles } from "./splitter-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: SplitterResizeTriggerProps = $props()
  const styles = useSplitterStyles()
</script>

<Splitter.ResizeTrigger
  bind:ref
  aria-label="Resize"
  {...props}
  data-slot="resizeTrigger"
  class={[!unstyled && styles().resizeTrigger, className]}
>
  {#if children}
    {@render children()}
  {:else}
    <SplitterResizeTriggerSeparator />
    <SplitterResizeTriggerIndicator />
  {/if}
</Splitter.ResizeTrigger>
