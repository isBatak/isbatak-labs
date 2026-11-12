<script module lang="ts">
  import { TreeView } from "@ark-ui/svelte/tree-view"

  export type TreeViewIndentGuideProps = TreeView.IndentGuideProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useTreeViewStyles } from "./tree-view-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TreeViewIndentGuideProps = $props()
  const styles = useTreeViewStyles()
</script>

<TreeView.IndentGuide bind:ref {...props} data-slot="indentGuide" class={[!unstyled && styles().indentGuide, className]} />
