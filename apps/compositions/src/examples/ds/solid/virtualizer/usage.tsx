import { ListVirtualizer, useListVirtualizer } from "@isbatak/solid-ui/virtualizer"
import { Index } from "solid-js"

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
        <Index each={virtualizer.getVirtualItems()}>
          {(item) => <ListVirtualizer.Item item={item()}>{items[item().index]}</ListVirtualizer.Item>}
        </Index>
      </ListVirtualizer.Content>
    </ListVirtualizer.Root>
  )
}
