import { JsonTreeView } from "@isbatak/solid-ui/json-tree-view"

const data = {
  regex: /^[a-z0-9]+/g,
  case_insensitive: /^(?:[a-z0-9]+)foo.*?/i,
}

export function JsonTreeViewRegexDemo() {
  return (
    <JsonTreeView.Root defaultExpandedDepth={1} data={data}>
      <JsonTreeView.Tree />
    </JsonTreeView.Root>
  )
}
