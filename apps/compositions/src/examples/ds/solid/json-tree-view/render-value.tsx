import { JsonTreeView } from "@isbatak/solid-ui/json-tree-view"
import { Link } from "@isbatak/solid-ui/link"

const data = {
  name: "John Doe",
  age: 30,
  number: Number.NaN,
  email: "john.doe@example.com",
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  },
}

const unquote = (value: string) => value.replace(/^"(.*)"$/, "$1")

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(unquote(value))

export function JsonTreeViewRenderValueDemo() {
  return (
    <JsonTreeView.Root defaultExpandedDepth={2} data={data}>
      <JsonTreeView.Tree
        renderValue={(node) => {
          if (node.type === "text" && typeof node.value === "string" && isEmail(node.value)) {
            return (
              <Link href={`mailto:${unquote(node.value)}`} target="_blank" rel="noreferrer">
                {node.value}
              </Link>
            )
          }
          return null
        }}
      />
    </JsonTreeView.Root>
  )
}
