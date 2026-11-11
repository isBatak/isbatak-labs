<script module lang="ts">
  import { TreeView } from "@ark-ui/svelte/tree-view"

  export type TreeViewNodeCheckboxProps = TreeView.NodeCheckboxProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useTreeViewStyles } from "./tree-view-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TreeViewNodeCheckboxProps = $props()
  const styles = useTreeViewStyles()
</script>

<TreeView.NodeCheckbox bind:ref {...props} data-slot="nodeCheckbox" class={[!unstyled && styles().nodeCheckbox, className]} />
