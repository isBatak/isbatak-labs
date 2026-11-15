import { Text } from "@isbatak/solid-ui/text"
import { ListVirtualizer, useListVirtualizer } from "@isbatak/solid-ui/virtualizer"
import { For, Index } from "solid-js"

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
        <Index each={virtualizer.getVirtualItems()}>
          {(item) => (
            <ListVirtualizer.Item item={item()} measure flexDirection="column" alignItems="flex-start">
              <Text fontWeight="semibold">{items[item().index]?.title}</Text>
              <For each={items[item().index]?.lines}>{(line) => <Text color="fg.muted">{line}</Text>}</For>
            </ListVirtualizer.Item>
          )}
        </Index>
      </ListVirtualizer.Content>
    </ListVirtualizer.Root>
  )
}
