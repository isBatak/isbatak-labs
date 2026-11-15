<script lang="ts">
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { ListVirtualizer, useListVirtualizer } from "@isbatak/svelte-ui/virtualizer"
  import { css } from "styled-system/css"

  const items = Array.from({ length: 1000 }, (_, index) => `Item ${index + 1}`)

  const sm = useListVirtualizer(() => ({ observeScrollElementSize: true, count: items.length, estimatedSize: () => 40 }))
  const md = useListVirtualizer(() => ({ observeScrollElementSize: true, count: items.length, estimatedSize: () => 48 }))
  const lg = useListVirtualizer(() => ({ observeScrollElementSize: true, count: items.length, estimatedSize: () => 56 }))
</script>

<Stack gap="6" maxW="xl">
  <ListVirtualizer.Root value={sm} size="sm" striped class={css({ h: "40" })}>
    <ListVirtualizer.Content>
      {#each sm.getVirtualItems() as item (item.key)}
        <ListVirtualizer.Item {item}>{items[item.index]}</ListVirtualizer.Item>
      {/each}
    </ListVirtualizer.Content>
  </ListVirtualizer.Root>
  <ListVirtualizer.Root value={md} size="md" striped class={css({ h: "48" })}>
    <ListVirtualizer.Content>
      {#each md.getVirtualItems() as item (item.key)}
        <ListVirtualizer.Item {item}>{items[item.index]}</ListVirtualizer.Item>
      {/each}
    </ListVirtualizer.Content>
  </ListVirtualizer.Root>
  <ListVirtualizer.Root value={lg} size="lg" striped class={css({ h: "56" })}>
    <ListVirtualizer.Content>
      {#each lg.getVirtualItems() as item (item.key)}
        <ListVirtualizer.Item {item}>{items[item.index]}</ListVirtualizer.Item>
      {/each}
    </ListVirtualizer.Content>
  </ListVirtualizer.Root>
</Stack>
