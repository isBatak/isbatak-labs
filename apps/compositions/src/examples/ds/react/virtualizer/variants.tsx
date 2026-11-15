import { Stack } from "@isbatak/react-ui/stack"
import { ListVirtualizer, useListVirtualizer } from "@isbatak/react-ui/virtualizer"

const items = Array.from({ length: 1000 }, (_, index) => `Item ${index + 1}`)

export function VirtualizerVariantsDemo() {
  const outline = useListVirtualizer({ observeScrollElementSize: true, count: items.length, estimatedSize: () => 48 })
  const subtle = useListVirtualizer({ observeScrollElementSize: true, count: items.length, estimatedSize: () => 48 })
  const plain = useListVirtualizer({ observeScrollElementSize: true, count: items.length, estimatedSize: () => 48 })

  return (
    <Stack gap="6" maxW="xl">
      <ListVirtualizer.Root value={outline} variant="outline" h="48">
        <ListVirtualizer.Content>
          {outline.getVirtualItems().map((item) => (
            <ListVirtualizer.Item key={item.key} item={item}>
              {items[item.index]}
            </ListVirtualizer.Item>
          ))}
        </ListVirtualizer.Content>
      </ListVirtualizer.Root>
      <ListVirtualizer.Root value={subtle} variant="subtle" h="48">
        <ListVirtualizer.Content>
          {subtle.getVirtualItems().map((item) => (
            <ListVirtualizer.Item key={item.key} item={item}>
              {items[item.index]}
            </ListVirtualizer.Item>
          ))}
        </ListVirtualizer.Content>
      </ListVirtualizer.Root>
      <ListVirtualizer.Root value={plain} variant="plain" h="48">
        <ListVirtualizer.Content>
          {plain.getVirtualItems().map((item) => (
            <ListVirtualizer.Item key={item.key} item={item}>
              {items[item.index]}
            </ListVirtualizer.Item>
          ))}
        </ListVirtualizer.Content>
      </ListVirtualizer.Root>
    </Stack>
  )
}
