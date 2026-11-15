import { Stack } from "@isbatak/solid-ui/stack"
import { ListVirtualizer, useListVirtualizer } from "@isbatak/solid-ui/virtualizer"
import { Index } from "solid-js"

const items = Array.from({ length: 1000 }, (_, index) => `Item ${index + 1}`)

export function VirtualizerVariantsDemo() {
  const outline = useListVirtualizer({ observeScrollElementSize: true, count: items.length, estimatedSize: () => 48 })
  const subtle = useListVirtualizer({ observeScrollElementSize: true, count: items.length, estimatedSize: () => 48 })
  const plain = useListVirtualizer({ observeScrollElementSize: true, count: items.length, estimatedSize: () => 48 })

  return (
    <Stack gap="6" maxW="xl">
      <ListVirtualizer.Root value={outline} variant="outline" h="48">
        <ListVirtualizer.Content>
          <Index each={outline.getVirtualItems()}>
            {(item) => <ListVirtualizer.Item item={item()}>{items[item().index]}</ListVirtualizer.Item>}
          </Index>
        </ListVirtualizer.Content>
      </ListVirtualizer.Root>
      <ListVirtualizer.Root value={subtle} variant="subtle" h="48">
        <ListVirtualizer.Content>
          <Index each={subtle.getVirtualItems()}>
            {(item) => <ListVirtualizer.Item item={item()}>{items[item().index]}</ListVirtualizer.Item>}
          </Index>
        </ListVirtualizer.Content>
      </ListVirtualizer.Root>
      <ListVirtualizer.Root value={plain} variant="plain" h="48">
        <ListVirtualizer.Content>
          <Index each={plain.getVirtualItems()}>
            {(item) => <ListVirtualizer.Item item={item()}>{items[item().index]}</ListVirtualizer.Item>}
          </Index>
        </ListVirtualizer.Content>
      </ListVirtualizer.Root>
    </Stack>
  )
}
