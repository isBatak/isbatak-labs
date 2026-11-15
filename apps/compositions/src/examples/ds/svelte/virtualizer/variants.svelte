<script lang="ts">
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { ListVirtualizer, useListVirtualizer } from "@isbatak/svelte-ui/virtualizer"
  import { css } from "styled-system/css"

  const items = Array.from({ length: 1000 }, (_, index) => `Item ${index + 1}`)

  const outline = useListVirtualizer(() => ({ observeScrollElementSize: true, count: items.length, estimatedSize: () => 48 }))
  const subtle = useListVirtualizer(() => ({ observeScrollElementSize: true, count: items.length, estimatedSize: () => 48 }))
  const plain = useListVirtualizer(() => ({ observeScrollElementSize: true, count: items.length, estimatedSize: () => 48 }))
</script>

<Stack gap="6" maxW="xl">
  <ListVirtualizer.Root value={outline} variant="outline" class={css({ h: "48" })}>
    <ListVirtualizer.Content>
      {#each outline.getVirtualItems() as item (item.key)}
        <ListVirtualizer.Item {item}>{items[item.index]}</ListVirtualizer.Item>
      {/each}
    </ListVirtualizer.Content>
  </ListVirtualizer.Root>
  <ListVirtualizer.Root value={subtle} variant="subtle" class={css({ h: "48" })}>
    <ListVirtualizer.Content>
      {#each subtle.getVirtualItems() as item (item.key)}
        <ListVirtualizer.Item {item}>{items[item.index]}</ListVirtualizer.Item>
      {/each}
    </ListVirtualizer.Content>
  </ListVirtualizer.Root>
  <ListVirtualizer.Root value={plain} variant="plain" class={css({ h: "48" })}>
    <ListVirtualizer.Content>
      {#each plain.getVirtualItems() as item (item.key)}
        <ListVirtualizer.Item {item}>{items[item.index]}</ListVirtualizer.Item>
      {/each}
    </ListVirtualizer.Content>
  </ListVirtualizer.Root>
</Stack>
