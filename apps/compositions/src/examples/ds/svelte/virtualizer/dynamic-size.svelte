<script lang="ts">
  import { Text } from "@isbatak/svelte-ui/text"
  import { ListVirtualizer, useListVirtualizer } from "@isbatak/svelte-ui/virtualizer"
  import { css } from "styled-system/css"

  const items = Array.from({ length: 10000 }, (_, index) => ({
    title: `Item ${index + 1}`,
    lines: Array.from({ length: (index % 4) + 1 }, (_, line) => `Line ${line + 1} of item ${index + 1}`),
  }))

  const virtualizer = useListVirtualizer(() => ({
    observeScrollElementSize: true,
    count: items.length,
    estimatedSize: () => 64,
  }))
</script>

<ListVirtualizer.Root value={virtualizer} striped class={css({ h: "96", maxW: "xl" })}>
  <ListVirtualizer.Content>
    {#each virtualizer.getVirtualItems() as item (item.key)}
      <ListVirtualizer.Item {item} measure class={css({ flexDirection: "column", alignItems: "flex-start" })}>
        <Text fontWeight="semibold">{items[item.index]?.title}</Text>
        {#each items[item.index]?.lines ?? [] as line (line)}
          <Text color="fg.muted">{line}</Text>
        {/each}
      </ListVirtualizer.Item>
    {/each}
  </ListVirtualizer.Content>
</ListVirtualizer.Root>
