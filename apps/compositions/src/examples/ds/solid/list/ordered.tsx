import { List } from "@isbatak/solid-ui/list"

export function ListOrderedDemo() {
  return (
    <List.Root
      maxW="md"
      asChild={(props) => (
        <ol {...props()}>
          <List.Item>Install the package</List.Item>
          <List.Item>Add the preset to your Panda config</List.Item>
          <List.Item>Import the components you need</List.Item>
        </ol>
      )}
    />
  )
}
