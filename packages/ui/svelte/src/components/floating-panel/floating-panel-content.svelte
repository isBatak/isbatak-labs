<script module lang="ts">
  import { FloatingPanel } from "@ark-ui/svelte/floating-panel"

  export type FloatingPanelContentProps = FloatingPanel.ContentProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useFloatingPanelStyles } from "./floating-panel-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: FloatingPanelContentProps = $props()
  const styles = useFloatingPanelStyles()
</script>

<FloatingPanel.Content
  bind:ref
  {...props}
  data-slot="content"
  class={[!unstyled && styles().content, className]}
/>
