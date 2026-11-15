<script module lang="ts">
  import { JsonTreeView } from "@ark-ui/svelte/json-tree-view"
  import { jsonTreeView, type JsonTreeViewVariantProps } from "@isbatak/panda-ds/recipes"

  export type JsonTreeViewRootProps = JsonTreeView.RootProps &
    JsonTreeViewVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideJsonTreeViewStyles } from "./json-tree-view-styles"

  let {
    expandedValue = $bindable(),
    selectedValue = $bindable(),
    focusedValue = $bindable(),
    checkedValue = $bindable(),
    unstyled,
    class: className,
    ...props
  }: JsonTreeViewRootProps = $props()
  const [variantProps, localProps] = $derived(jsonTreeView.splitVariantProps(props))
  const styles = $derived(jsonTreeView(variantProps))
  provideJsonTreeViewStyles(() => styles)
</script>

<JsonTreeView.Root
  bind:expandedValue
  bind:selectedValue
  bind:focusedValue
  bind:checkedValue
  {...localProps}
  data-slot="root"
  class={[!unstyled && styles.root, className]}
/>
