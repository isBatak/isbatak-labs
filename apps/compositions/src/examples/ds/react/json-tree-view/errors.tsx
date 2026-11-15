import { JsonTreeView } from "@isbatak/react-ui/json-tree-view"

const data = new Error("Error")

export function JsonTreeViewErrorsDemo() {
  return (
    <JsonTreeView.Root defaultExpandedDepth={1} data={data}>
      <JsonTreeView.Tree />
    </JsonTreeView.Root>
  )
}
