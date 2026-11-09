<script module lang="ts">
  import { Splitter } from "@ark-ui/svelte/splitter"

  export type SplitterResizeTriggerIndicatorProps = Splitter.ResizeTriggerIndicatorProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useSplitterStyles } from "./splitter-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: SplitterResizeTriggerIndicatorProps = $props()
  const styles = useSplitterStyles()
</script>

<Splitter.ResizeTriggerIndicator bind:ref {...props} data-slot="resizeTriggerIndicator" class={[!unstyled && styles().resizeTriggerIndicator, className]} />
