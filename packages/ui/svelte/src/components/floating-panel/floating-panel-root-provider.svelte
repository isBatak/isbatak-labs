<script module lang="ts">
  import { FloatingPanel } from "@ark-ui/svelte/floating-panel"
  import { floatingPanel, type FloatingPanelVariantProps } from "@isbatak/panda-ds/recipes"

  export type FloatingPanelRootProviderProps = FloatingPanel.RootProviderProps & FloatingPanelVariantProps
</script>

<script lang="ts">
  import { provideFloatingPanelStyles } from "./floating-panel-styles"

  let props: FloatingPanelRootProviderProps = $props()
  const [variantProps, localProps] = $derived(floatingPanel.splitVariantProps(props))
  const styles = $derived(floatingPanel(variantProps))
  provideFloatingPanelStyles(() => styles)
</script>

<FloatingPanel.RootProvider {...localProps} />
