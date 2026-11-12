<script module lang="ts">
  import { TreeView } from "@ark-ui/svelte/tree-view"

  export type TreeViewNodeGroupContentProps = TreeView.NodeGroupContentProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useTreeViewStyles } from "./tree-view-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TreeViewNodeGroupContentProps = $props()
  const styles = useTreeViewStyles()
</script>

<TreeView.NodeGroupContent bind:ref {...props} data-slot="nodeGroupContent" class={[!unstyled && styles().nodeGroupContent, className]} />
