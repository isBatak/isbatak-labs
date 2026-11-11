<script module lang="ts">
  import { type TreeNode, TreeView } from "@ark-ui/svelte/tree-view"
  import { treeView, type TreeViewVariantProps } from "@isbatak/panda-ds/recipes"

  export type TreeViewRootProps<T extends TreeNode = TreeNode> = TreeView.RootProps<T> &
    TreeViewVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends TreeNode = TreeNode">
  import { provideTreeViewStyles } from "./tree-view-styles"

  let {
    ref = $bindable(null),
    expandedValue = $bindable(),
    selectedValue = $bindable(),
    focusedValue = $bindable(),
    checkedValue = $bindable(),
    unstyled,
    class: className,
    ...props
  }: TreeViewRootProps<T> = $props()
  const [variantProps, localProps] = $derived(treeView.splitVariantProps(props))
  const styles = $derived(treeView(variantProps))
  provideTreeViewStyles(() => styles)
</script>

<TreeView.Root
  bind:ref
  bind:expandedValue
  bind:selectedValue
  bind:focusedValue
  bind:checkedValue
  {...localProps}
  data-slot="root"
  class={[!unstyled && styles.root, className]}
/>
