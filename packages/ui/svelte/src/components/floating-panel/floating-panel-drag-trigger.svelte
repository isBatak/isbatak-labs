<script module lang="ts">
  import { FloatingPanel } from "@ark-ui/svelte/floating-panel"

  export type FloatingPanelDragTriggerProps = FloatingPanel.DragTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useFloatingPanelStyles } from "./floating-panel-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: FloatingPanelDragTriggerProps = $props()
  const styles = useFloatingPanelStyles()
</script>

<FloatingPanel.DragTrigger
  bind:ref
  {...props}
  data-slot="dragTrigger"
  class={[!unstyled && styles().dragTrigger, className]}
/>
