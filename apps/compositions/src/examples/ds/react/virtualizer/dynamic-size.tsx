import { Text } from "@isbatak/react-ui/text"
import { ListVirtualizer, useListVirtualizer } from "@isbatak/react-ui/virtualizer"

const items = Array.from({ length: 10000 }, (_, index) => ({
  title: `Item ${index + 1}`,
  lines: Array.from({ length: (index % 4) + 1 }, (_, line) => `Line ${line + 1} of item ${index + 1}`),
}))

export function VirtualizerDynamicSizeDemo() {
  const virtualizer = useListVirtualizer({
    observeScrollElementSize: true,
    count: items.length,
    estimatedSize: () => 64,
  })

  return (
    <ListVirtualizer.Root value={virtualizer} striped h="96" maxW="xl">
      <ListVirtualizer.Content>
        {virtualizer.getVirtualItems().map((item) => (
          <ListVirtualizer.Item key={item.key} item={item} measure flexDirection="column" alignItems="flex-start">
            <Text fontWeight="semibold">{items[item.index]?.title}</Text>
            {items[item.index]?.lines.map((line) => (
              <Text key={line} color="fg.muted">
                {line}
              </Text>
            ))}
          </ListVirtualizer.Item>
        ))}
      </ListVirtualizer.Content>
    </ListVirtualizer.Root>
  )
}
