import { WindowVirtualizer, useWindowVirtualizer } from "@isbatak/react-ui/virtualizer"

const items = Array.from({ length: 10000 }, (_, index) => `Item ${index + 1}`)

export function VirtualizerWindowDemo() {
  const virtualizer = useWindowVirtualizer({
    count: items.length,
    estimatedSize: () => 48,
  })

  return (
    <WindowVirtualizer.Root value={virtualizer} striped maxW="xl">
      <WindowVirtualizer.Content>
        {virtualizer.getVirtualItems().map((item) => (
          <WindowVirtualizer.Item key={item.key} item={item}>
            {items[item.index]}
          </WindowVirtualizer.Item>
        ))}
      </WindowVirtualizer.Content>
    </WindowVirtualizer.Root>
  )
}
