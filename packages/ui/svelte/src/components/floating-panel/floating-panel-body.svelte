<script module lang="ts">
  import { FloatingPanel } from "@ark-ui/svelte/floating-panel"

  export type FloatingPanelBodyProps = FloatingPanel.BodyProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useFloatingPanelStyles } from "./floating-panel-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: FloatingPanelBodyProps = $props()
  const styles = useFloatingPanelStyles()
</script>

<FloatingPanel.Body
  bind:ref
  {...props}
  data-slot="body"
  class={[!unstyled && styles().body, className]}
/>
