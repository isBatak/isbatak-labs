<script module lang="ts">
  import { TreeView } from "@ark-ui/svelte/tree-view"

  export type TreeViewNodeProps = TreeView.NodeProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useTreeViewStyles } from "./tree-view-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TreeViewNodeProps = $props()
  const styles = useTreeViewStyles()
</script>

<TreeView.Node bind:ref {...props} data-slot="node" class={[!unstyled && styles().node, className]} />
