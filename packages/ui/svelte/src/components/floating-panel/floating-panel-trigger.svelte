<script module lang="ts">
  import { FloatingPanel } from "@ark-ui/svelte/floating-panel"

  export type FloatingPanelTriggerProps = FloatingPanel.TriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useFloatingPanelStyles } from "./floating-panel-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: FloatingPanelTriggerProps = $props()
  const styles = useFloatingPanelStyles()
</script>

<FloatingPanel.Trigger
  bind:ref
  {...props}
  data-slot="trigger"
  class={[!unstyled && styles().trigger, className]}
/>
