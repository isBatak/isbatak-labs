<script module lang="ts">
  import { Splitter } from "@ark-ui/svelte/splitter"

  export type SplitterPanelProps = Splitter.PanelProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useSplitterStyles } from "./splitter-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: SplitterPanelProps = $props()
  const styles = useSplitterStyles()
</script>

<Splitter.Panel bind:ref {...props} data-slot="panel" class={[!unstyled && styles().panel, className]} />
