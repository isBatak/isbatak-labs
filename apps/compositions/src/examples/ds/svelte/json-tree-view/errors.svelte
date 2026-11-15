<script lang="ts">
  import { JsonTreeView } from "@isbatak/svelte-ui/json-tree-view"

  const data = new Error("Error")
</script>

<JsonTreeView.Root defaultExpandedDepth={1} data={data}>
  <JsonTreeView.Tree />
</JsonTreeView.Root>
