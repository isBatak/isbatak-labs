<script module lang="ts">
  import { FloatingPanel } from "@ark-ui/svelte/floating-panel"

  export type FloatingPanelTitleProps = FloatingPanel.TitleProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useFloatingPanelStyles } from "./floating-panel-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: FloatingPanelTitleProps = $props()
  const styles = useFloatingPanelStyles()
</script>

<FloatingPanel.Title
  bind:ref
  {...props}
  data-slot="title"
  class={[!unstyled && styles().title, className]}
/>
