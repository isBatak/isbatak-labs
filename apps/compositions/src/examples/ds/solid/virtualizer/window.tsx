import { WindowVirtualizer, useWindowVirtualizer } from "@isbatak/solid-ui/virtualizer"
import { Index } from "solid-js"

const items = Array.from({ length: 10000 }, (_, index) => `Item ${index + 1}`)

export function VirtualizerWindowDemo() {
  const virtualizer = useWindowVirtualizer({
    count: items.length,
    estimatedSize: () => 48,
  })

  return (
    <WindowVirtualizer.Root value={virtualizer} striped maxW="xl">
      <WindowVirtualizer.Content>
        <Index each={virtualizer.getVirtualItems()}>
          {(item) => <WindowVirtualizer.Item item={item()}>{items[item().index]}</WindowVirtualizer.Item>}
        </Index>
      </WindowVirtualizer.Content>
    </WindowVirtualizer.Root>
  )
}
