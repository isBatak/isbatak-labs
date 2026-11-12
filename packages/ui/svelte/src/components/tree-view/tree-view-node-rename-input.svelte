<script module lang="ts">
  import { TreeView } from "@ark-ui/svelte/tree-view"

  export type TreeViewNodeRenameInputProps = TreeView.NodeRenameInputProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useTreeViewStyles } from "./tree-view-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TreeViewNodeRenameInputProps = $props()
  const styles = useTreeViewStyles()
</script>

<TreeView.NodeRenameInput bind:ref {...props} data-slot="nodeRenameInput" class={[!unstyled && styles().nodeRenameInput, className]} />
