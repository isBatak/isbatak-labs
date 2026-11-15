import { ListVirtualizer, useListVirtualizer } from "@isbatak/react-ui/virtualizer"

const items = Array.from({ length: 10000 }, (_, index) => `Item ${index + 1}`)

export function VirtualizerDemo() {
  const virtualizer = useListVirtualizer({
    observeScrollElementSize: true,
    count: items.length,
    estimatedSize: () => 48,
  })

  return (
    <ListVirtualizer.Root value={virtualizer} striped h="96" maxW="xl">
      <ListVirtualizer.Content>
        {virtualizer.getVirtualItems().map((item) => (
          <ListVirtualizer.Item key={item.key} item={item}>
            {items[item.index]}
          </ListVirtualizer.Item>
        ))}
      </ListVirtualizer.Content>
    </ListVirtualizer.Root>
  )
}
