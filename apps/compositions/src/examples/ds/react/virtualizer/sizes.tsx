import { Stack } from "@isbatak/react-ui/stack"
import { ListVirtualizer, useListVirtualizer } from "@isbatak/react-ui/virtualizer"

const items = Array.from({ length: 1000 }, (_, index) => `Item ${index + 1}`)

export function VirtualizerSizesDemo() {
  const sm = useListVirtualizer({ observeScrollElementSize: true, count: items.length, estimatedSize: () => 40 })
  const md = useListVirtualizer({ observeScrollElementSize: true, count: items.length, estimatedSize: () => 48 })
  const lg = useListVirtualizer({ observeScrollElementSize: true, count: items.length, estimatedSize: () => 56 })

  return (
    <Stack gap="6" maxW="xl">
      <ListVirtualizer.Root value={sm} size="sm" striped h="40">
        <ListVirtualizer.Content>
          {sm.getVirtualItems().map((item) => (
            <ListVirtualizer.Item key={item.key} item={item}>
              {items[item.index]}
            </ListVirtualizer.Item>
          ))}
        </ListVirtualizer.Content>
      </ListVirtualizer.Root>
      <ListVirtualizer.Root value={md} size="md" striped h="48">
        <ListVirtualizer.Content>
          {md.getVirtualItems().map((item) => (
            <ListVirtualizer.Item key={item.key} item={item}>
              {items[item.index]}
            </ListVirtualizer.Item>
          ))}
        </ListVirtualizer.Content>
      </ListVirtualizer.Root>
      <ListVirtualizer.Root value={lg} size="lg" striped h="56">
        <ListVirtualizer.Content>
          {lg.getVirtualItems().map((item) => (
            <ListVirtualizer.Item key={item.key} item={item}>
              {items[item.index]}
            </ListVirtualizer.Item>
          ))}
        </ListVirtualizer.Content>
      </ListVirtualizer.Root>
    </Stack>
  )
}
