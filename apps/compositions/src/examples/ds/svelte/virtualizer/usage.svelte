<script lang="ts">
  import { ListVirtualizer, useListVirtualizer } from "@isbatak/svelte-ui/virtualizer"
  import { css } from "styled-system/css"

  const items = Array.from({ length: 10000 }, (_, index) => `Item ${index + 1}`)

  const virtualizer = useListVirtualizer(() => ({
    observeScrollElementSize: true,
    count: items.length,
    estimatedSize: () => 48,
  }))
</script>

<ListVirtualizer.Root value={virtualizer} striped class={css({ h: "96", maxW: "xl" })}>
  <ListVirtualizer.Content>
    {#each virtualizer.getVirtualItems() as item (item.key)}
      <ListVirtualizer.Item {item}>{items[item.index]}</ListVirtualizer.Item>
    {/each}
  </ListVirtualizer.Content>
</ListVirtualizer.Root>
