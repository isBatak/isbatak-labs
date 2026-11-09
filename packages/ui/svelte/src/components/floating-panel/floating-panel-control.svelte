<script module lang="ts">
  import { FloatingPanel } from "@ark-ui/svelte/floating-panel"

  export type FloatingPanelControlProps = FloatingPanel.ControlProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useFloatingPanelStyles } from "./floating-panel-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: FloatingPanelControlProps = $props()
  const styles = useFloatingPanelStyles()
</script>

<FloatingPanel.Control
  bind:ref
  {...props}
  data-slot="control"
  class={[!unstyled && styles().control, className]}
/>
