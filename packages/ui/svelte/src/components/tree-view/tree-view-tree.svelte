<script module lang="ts">
  import { TreeView } from "@ark-ui/svelte/tree-view"

  export type TreeViewTreeProps = TreeView.TreeProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useTreeViewStyles } from "./tree-view-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TreeViewTreeProps = $props()
  const styles = useTreeViewStyles()
</script>

<TreeView.Tree bind:ref {...props} data-slot="tree" class={[!unstyled && styles().tree, className]} />
