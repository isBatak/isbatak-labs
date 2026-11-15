import { Button } from "@isbatak/solid-ui/button"
import { JsonTreeView, useJsonTreeView } from "@isbatak/solid-ui/json-tree-view"
import { Stack } from "@isbatak/solid-ui/stack"
import { Text } from "@isbatak/solid-ui/text"

export function JsonTreeViewRootProviderDemo() {
  const jsonTreeView = useJsonTreeView({
    defaultExpandedDepth: 1,
    data: {
      name: "John Doe",
      age: 30,
      email: "john.doe@example.com",
      tags: ["tag1", "tag2", "tag3"],
      address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345",
      },
    },
  })

  return (
    <Stack gap="3" align="flex-start">
      <Stack direction="row" gap="2" align="center">
        <Button size="xs" variant="outline" onClick={() => jsonTreeView().expand()}>
          Expand all
        </Button>
        <Button size="xs" variant="outline" onClick={() => jsonTreeView().collapse()}>
          Collapse all
        </Button>
        <Text textStyle="sm" color="fg.muted">
          Expanded: {jsonTreeView().expandedValue.length}
        </Text>
      </Stack>
      <JsonTreeView.RootProvider value={jsonTreeView}>
        <JsonTreeView.Tree />
      </JsonTreeView.RootProvider>
    </Stack>
  )
}
