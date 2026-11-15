import { Stack } from "@isbatak/solid-ui/stack"
import { ListVirtualizer, useListVirtualizer } from "@isbatak/solid-ui/virtualizer"
import { Index } from "solid-js"

const items = Array.from({ length: 1000 }, (_, index) => `Item ${index + 1}`)

export function VirtualizerSizesDemo() {
  const sm = useListVirtualizer({ observeScrollElementSize: true, count: items.length, estimatedSize: () => 40 })
  const md = useListVirtualizer({ observeScrollElementSize: true, count: items.length, estimatedSize: () => 48 })
  const lg = useListVirtualizer({ observeScrollElementSize: true, count: items.length, estimatedSize: () => 56 })

  return (
    <Stack gap="6" maxW="xl">
      <ListVirtualizer.Root value={sm} size="sm" striped h="40">
        <ListVirtualizer.Content>
          <Index each={sm.getVirtualItems()}>
            {(item) => <ListVirtualizer.Item item={item()}>{items[item().index]}</ListVirtualizer.Item>}
          </Index>
        </ListVirtualizer.Content>
      </ListVirtualizer.Root>
      <ListVirtualizer.Root value={md} size="md" striped h="48">
        <ListVirtualizer.Content>
          <Index each={md.getVirtualItems()}>
            {(item) => <ListVirtualizer.Item item={item()}>{items[item().index]}</ListVirtualizer.Item>}
          </Index>
        </ListVirtualizer.Content>
      </ListVirtualizer.Root>
      <ListVirtualizer.Root value={lg} size="lg" striped h="56">
        <ListVirtualizer.Content>
          <Index each={lg.getVirtualItems()}>
            {(item) => <ListVirtualizer.Item item={item()}>{items[item().index]}</ListVirtualizer.Item>}
          </Index>
        </ListVirtualizer.Content>
      </ListVirtualizer.Root>
    </Stack>
  )
}
