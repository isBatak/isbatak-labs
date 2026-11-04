import { List } from "@isbatak/react-ui/list"

export function ListOrderedDemo() {
  return (
    <List.Root asChild maxW="md">
      <ol>
        <List.Item>Install the package</List.Item>
        <List.Item>Add the preset to your Panda config</List.Item>
        <List.Item>Import the components you need</List.Item>
      </ol>
    </List.Root>
  )
}
