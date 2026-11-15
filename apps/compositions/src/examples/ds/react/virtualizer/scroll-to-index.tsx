import { Button } from "@isbatak/react-ui/button"
import { Stack } from "@isbatak/react-ui/stack"
import { ListVirtualizer, useListVirtualizer } from "@isbatak/react-ui/virtualizer"

const items = Array.from({ length: 10000 }, (_, index) => `Item ${index + 1}`)

export function VirtualizerScrollToIndexDemo() {
  const virtualizer = useListVirtualizer({
    observeScrollElementSize: true,
    count: items.length,
    estimatedSize: () => 48,
  })

  return (
    <Stack gap="3" maxW="xl">
      <Stack direction="row" gap="2" wrap="wrap">
        <Button size="sm" variant="outline" onClick={() => virtualizer.scrollToIndex(0)}>
          Scroll to top
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => virtualizer.scrollToIndex(Math.floor(items.length / 2), { align: "center" })}
        >
          Scroll to middle
        </Button>
        <Button size="sm" variant="outline" onClick={() => virtualizer.scrollToIndex(items.length - 1)}>
          Scroll to bottom
        </Button>
      </Stack>
      <ListVirtualizer.Root value={virtualizer} striped h="96">
        <ListVirtualizer.Content>
          {virtualizer.getVirtualItems().map((item) => (
            <ListVirtualizer.Item key={item.key} item={item}>
              {items[item.index]}
            </ListVirtualizer.Item>
          ))}
        </ListVirtualizer.Content>
      </ListVirtualizer.Root>
    </Stack>
  )
}
