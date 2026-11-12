<script module lang="ts">
  import { TreeView } from "@ark-ui/svelte/tree-view"

  export type TreeViewCellProps = TreeView.CellProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useTreeViewStyles } from "./tree-view-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TreeViewCellProps = $props()
  const styles = useTreeViewStyles()
</script>

<TreeView.Cell bind:ref {...props} data-slot="cell" class={[!unstyled && styles().cell, className]} />
