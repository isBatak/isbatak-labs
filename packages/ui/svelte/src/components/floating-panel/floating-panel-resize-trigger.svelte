<script module lang="ts">
  import { FloatingPanel } from "@ark-ui/svelte/floating-panel"

  export type FloatingPanelResizeTriggerProps = FloatingPanel.ResizeTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useFloatingPanelStyles } from "./floating-panel-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: FloatingPanelResizeTriggerProps = $props()
  const styles = useFloatingPanelStyles()
</script>

<FloatingPanel.ResizeTrigger
  bind:ref
  {...props}
  data-slot="resizeTrigger"
  class={[!unstyled && styles().resizeTrigger, className]}
/>
