import { ListVirtualizer, useListVirtualizer } from "@isbatak/react-ui/virtualizer"

const items = Array.from({ length: 10000 }, (_, index) => `${index + 1}`)

export function VirtualizerHorizontalDemo() {
  const virtualizer = useListVirtualizer({
    observeScrollElementSize: true,
    count: items.length,
    orientation: "horizontal",
    estimatedSize: () => 80,
  })

  return (
    <ListVirtualizer.Root value={virtualizer} orientation="horizontal" striped h="48" maxW="xl">
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
