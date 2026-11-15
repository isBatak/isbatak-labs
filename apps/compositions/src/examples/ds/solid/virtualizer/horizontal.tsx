import { ListVirtualizer, useListVirtualizer } from "@isbatak/solid-ui/virtualizer"
import { Index } from "solid-js"

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
        <Index each={virtualizer.getVirtualItems()}>
          {(item) => <ListVirtualizer.Item item={item()}>{items[item().index]}</ListVirtualizer.Item>}
        </Index>
      </ListVirtualizer.Content>
    </ListVirtualizer.Root>
  )
}
