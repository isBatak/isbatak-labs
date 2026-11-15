import { Button } from "@isbatak/solid-ui/button"
import { Stack } from "@isbatak/solid-ui/stack"
import { ListVirtualizer, useListVirtualizer } from "@isbatak/solid-ui/virtualizer"
import { Index } from "solid-js"

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
          <Index each={virtualizer.getVirtualItems()}>
            {(item) => <ListVirtualizer.Item item={item()}>{items[item().index]}</ListVirtualizer.Item>}
          </Index>
        </ListVirtualizer.Content>
      </ListVirtualizer.Root>
    </Stack>
  )
}
