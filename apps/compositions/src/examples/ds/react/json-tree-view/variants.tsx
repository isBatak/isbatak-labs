import { JsonTreeView } from "@isbatak/react-ui/json-tree-view"
import { Stack } from "@isbatak/react-ui/stack"

const data = {
  name: "John Doe",
  age: 30,
  active: true,
  tags: ["tag1", "tag2"],
}

export function JsonTreeViewVariantsDemo() {
  return (
    <Stack gap="6">
      <JsonTreeView.Root variant="plain" defaultExpandedDepth={1} data={data}>
        <JsonTreeView.Tree />
      </JsonTreeView.Root>
      <JsonTreeView.Root variant="outline" defaultExpandedDepth={1} data={data}>
        <JsonTreeView.Tree />
      </JsonTreeView.Root>
      <JsonTreeView.Root variant="subtle" defaultExpandedDepth={1} data={data}>
        <JsonTreeView.Tree />
      </JsonTreeView.Root>
    </Stack>
  )
}
