<script module lang="ts">
  import { FloatingPanel } from "@ark-ui/svelte/floating-panel"

  export type FloatingPanelHeaderProps = FloatingPanel.HeaderProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useFloatingPanelStyles } from "./floating-panel-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: FloatingPanelHeaderProps = $props()
  const styles = useFloatingPanelStyles()
</script>

<FloatingPanel.Header
  bind:ref
  {...props}
  data-slot="header"
  class={[!unstyled && styles().header, className]}
/>
