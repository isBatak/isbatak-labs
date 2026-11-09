<script module lang="ts">
  import { FloatingPanel } from "@ark-ui/svelte/floating-panel"
  import { floatingPanel, type FloatingPanelVariantProps } from "@isbatak/panda-ds/recipes"

  export type FloatingPanelRootProps = FloatingPanel.RootProps & FloatingPanelVariantProps
</script>

<script lang="ts">
  import { provideFloatingPanelStyles } from "./floating-panel-styles"

  let { open = $bindable(), position = $bindable(), size = $bindable(), ...props }: FloatingPanelRootProps = $props()
  const [variantProps, localProps] = $derived(floatingPanel.splitVariantProps(props))
  const styles = $derived(floatingPanel(variantProps))
  provideFloatingPanelStyles(() => styles)
</script>

<FloatingPanel.Root bind:open bind:position bind:size {...localProps} />
