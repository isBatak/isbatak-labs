<script module lang="ts">
  import { TreeView } from "@ark-ui/svelte/tree-view"

  export type TreeViewNodeExpandTriggerProps = TreeView.NodeExpandTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useTreeViewStyles } from "./tree-view-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TreeViewNodeExpandTriggerProps = $props()
  const styles = useTreeViewStyles()
</script>

<TreeView.NodeExpandTrigger bind:ref {...props} data-slot="nodeExpandTrigger" class={[!unstyled && styles().nodeExpandTrigger, className]} />
