<script module lang="ts">
  import { Tabs } from "@ark-ui/svelte/tabs"
  import { tabs, type TabsVariantProps } from "@isbatak/panda-ds/recipes"

  export type TabsRootProps = Tabs.RootProps & TabsVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideTabsStyles } from "./tabs-styles"

  let { ref = $bindable(null), value = $bindable(), unstyled, class: className, ...props }: TabsRootProps = $props()
  const [variantProps, localProps] = $derived(tabs.splitVariantProps(props))
  const styles = $derived(tabs(variantProps))
  provideTabsStyles(() => styles)
</script>

<Tabs.Root bind:ref bind:value {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
