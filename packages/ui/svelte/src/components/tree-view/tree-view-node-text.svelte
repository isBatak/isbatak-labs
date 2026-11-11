<script module lang="ts">
  import { TreeView } from "@ark-ui/svelte/tree-view"

  export type TreeViewNodeTextProps = TreeView.NodeTextProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useTreeViewStyles } from "./tree-view-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TreeViewNodeTextProps = $props()
  const styles = useTreeViewStyles()
</script>

<TreeView.NodeText bind:ref {...props} data-slot="nodeText" class={[!unstyled && styles().nodeText, className]} />
