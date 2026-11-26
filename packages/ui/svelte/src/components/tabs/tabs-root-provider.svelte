<script module lang="ts">
  import { Tabs } from "@ark-ui/svelte/tabs"
  import { tabs, type TabsVariantProps } from "@isbatak/panda-ds/recipes"

  export type TabsRootProviderProps = Tabs.RootProviderProps & TabsVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideTabsStyles } from "./tabs-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TabsRootProviderProps = $props()
  const [variantProps, localProps] = $derived(tabs.splitVariantProps(props))
  const styles = $derived(tabs(variantProps))
  provideTabsStyles(() => styles)
</script>

<Tabs.RootProvider bind:ref {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
