<script module lang="ts">
  import { type TreeNode, TreeView } from "@ark-ui/svelte/tree-view"
  import { treeView, type TreeViewVariantProps } from "@isbatak/panda-ds/recipes"

  export type TreeViewRootProviderProps<T extends TreeNode = TreeNode> = TreeView.RootProviderProps<T> &
    TreeViewVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends TreeNode = TreeNode">
  import { provideTreeViewStyles } from "./tree-view-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TreeViewRootProviderProps<T> = $props()
  const [variantProps, localProps] = $derived(treeView.splitVariantProps(props))
  const styles = $derived(treeView(variantProps))
  provideTreeViewStyles(() => styles)
</script>

<TreeView.RootProvider bind:ref {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
