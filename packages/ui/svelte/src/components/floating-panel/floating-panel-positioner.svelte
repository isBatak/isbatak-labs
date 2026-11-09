<script module lang="ts">
  import { FloatingPanel } from "@ark-ui/svelte/floating-panel"

  export type FloatingPanelPositionerProps = FloatingPanel.PositionerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useFloatingPanelStyles } from "./floating-panel-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: FloatingPanelPositionerProps = $props()
  const styles = useFloatingPanelStyles()
</script>

<FloatingPanel.Positioner
  bind:ref
  {...props}
  data-slot="positioner"
  class={[!unstyled && styles().positioner, className]}
/>
