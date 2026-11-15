<script module lang="ts">
  import { JsonTreeView } from "@ark-ui/svelte/json-tree-view"

  export type JsonTreeViewTreeProps = JsonTreeView.TreeProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { Icon } from "../icon"
  import { useJsonTreeViewStyles } from "./json-tree-view-styles"

  let { arrow, unstyled, class: className, ...props }: JsonTreeViewTreeProps = $props()
  const styles = useJsonTreeViewStyles()
</script>

{#snippet defaultArrow()}
  <Icon name="chevron-right" />
{/snippet}

<JsonTreeView.Tree
  arrow={arrow ?? defaultArrow}
  {...props}
  data-slot="tree"
  class={[!unstyled && styles().tree, className]}
/>
