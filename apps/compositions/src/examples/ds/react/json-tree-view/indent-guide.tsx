import { JsonTreeView } from "@isbatak/react-ui/json-tree-view"

const data = {
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
}

export function JsonTreeViewIndentGuideDemo() {
  return (
    <JsonTreeView.Root defaultExpandedDepth={2} data={data}>
      <JsonTreeView.Tree indentGuide />
    </JsonTreeView.Root>
  )
}
