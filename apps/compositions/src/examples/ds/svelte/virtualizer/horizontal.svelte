<script lang="ts">
  import { ListVirtualizer, useListVirtualizer } from "@isbatak/svelte-ui/virtualizer"
  import { css } from "styled-system/css"

  const items = Array.from({ length: 10000 }, (_, index) => `${index + 1}`)

  const virtualizer = useListVirtualizer(() => ({
    observeScrollElementSize: true,
    count: items.length,
    orientation: "horizontal",
    estimatedSize: () => 80,
  }))
</script>

<ListVirtualizer.Root value={virtualizer} orientation="horizontal" striped class={css({ h: "48", maxW: "xl" })}>
  <ListVirtualizer.Content>
    {#each virtualizer.getVirtualItems() as item (item.key)}
      <ListVirtualizer.Item {item}>{items[item.index]}</ListVirtualizer.Item>
    {/each}
  </ListVirtualizer.Content>
</ListVirtualizer.Root>
