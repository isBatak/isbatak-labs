<script module lang="ts">
  import { TreeView } from "@ark-ui/svelte/tree-view"

  export type TreeViewNodeGroupProps = TreeView.NodeGroupProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useTreeViewStyles } from "./tree-view-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TreeViewNodeGroupProps = $props()
  const styles = useTreeViewStyles()
</script>

<TreeView.NodeGroup bind:ref {...props} data-slot="nodeGroup" class={[!unstyled && styles().nodeGroup, className]} />
