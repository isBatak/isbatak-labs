<script lang="ts">
  import { JsonTreeView } from "@isbatak/svelte-ui/json-tree-view"

  const data = {
    regex: /^[a-z0-9]+/g,
    case_insensitive: /^(?:[a-z0-9]+)foo.*?/i,
  }
</script>

<JsonTreeView.Root defaultExpandedDepth={1} data={data}>
  <JsonTreeView.Tree />
</JsonTreeView.Root>
