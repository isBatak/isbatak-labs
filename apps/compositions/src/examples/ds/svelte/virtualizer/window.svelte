<script lang="ts">
  import { WindowVirtualizer, useWindowVirtualizer } from "@isbatak/svelte-ui/virtualizer"
  import { css } from "styled-system/css"

  const items = Array.from({ length: 10000 }, (_, index) => `Item ${index + 1}`)

  const virtualizer = useWindowVirtualizer(() => ({
    count: items.length,
    estimatedSize: () => 48,
  }))
</script>

<WindowVirtualizer.Root value={virtualizer} striped class={css({ maxW: "xl" })}>
  <WindowVirtualizer.Content>
    {#each virtualizer.getVirtualItems() as item (item.key)}
      <WindowVirtualizer.Item {item}>{items[item.index]}</WindowVirtualizer.Item>
    {/each}
  </WindowVirtualizer.Content>
</WindowVirtualizer.Root>
