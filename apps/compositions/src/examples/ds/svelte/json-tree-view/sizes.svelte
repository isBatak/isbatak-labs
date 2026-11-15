<script lang="ts">
  import { JsonTreeView } from "@isbatak/svelte-ui/json-tree-view"
  import { Stack } from "@isbatak/svelte-ui/stack"

  const data = {
    name: "John Doe",
    age: 30,
    active: true,
    tags: ["tag1", "tag2"],
  }
</script>

<Stack gap="6">
  <JsonTreeView.Root size="sm" defaultExpandedDepth={1} data={data}>
    <JsonTreeView.Tree />
  </JsonTreeView.Root>
  <JsonTreeView.Root size="md" defaultExpandedDepth={1} data={data}>
    <JsonTreeView.Tree />
  </JsonTreeView.Root>
  <JsonTreeView.Root size="lg" defaultExpandedDepth={1} data={data}>
    <JsonTreeView.Tree />
  </JsonTreeView.Root>
</Stack>
