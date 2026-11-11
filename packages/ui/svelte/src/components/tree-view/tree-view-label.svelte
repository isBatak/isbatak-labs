<script module lang="ts">
  import { TreeView } from "@ark-ui/svelte/tree-view"

  export type TreeViewLabelProps = TreeView.LabelProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useTreeViewStyles } from "./tree-view-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TreeViewLabelProps = $props()
  const styles = useTreeViewStyles()
</script>

<TreeView.Label bind:ref {...props} data-slot="label" class={[!unstyled && styles().label, className]} />
