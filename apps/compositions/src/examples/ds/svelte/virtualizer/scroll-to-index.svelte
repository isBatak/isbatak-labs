<script lang="ts">
  import { Button } from "@isbatak/svelte-ui/button"
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { ListVirtualizer, useListVirtualizer } from "@isbatak/svelte-ui/virtualizer"
  import { css } from "styled-system/css"

  const items = Array.from({ length: 10000 }, (_, index) => `Item ${index + 1}`)

  const virtualizer = useListVirtualizer(() => ({
    observeScrollElementSize: true,
    count: items.length,
    estimatedSize: () => 48,
  }))
</script>

<Stack gap="3" maxW="xl">
  <Stack direction="row" gap="2" wrap="wrap">
    <Button size="sm" variant="outline" onclick={() => virtualizer.scrollToIndex(0)}>Scroll to top</Button>
    <Button
      size="sm"
      variant="outline"
      onclick={() => virtualizer.scrollToIndex(Math.floor(items.length / 2), { align: "center" })}
    >
      Scroll to middle
    </Button>
    <Button size="sm" variant="outline" onclick={() => virtualizer.scrollToIndex(items.length - 1)}>Scroll to bottom</Button>
  </Stack>
  <ListVirtualizer.Root value={virtualizer} striped class={css({ h: "96" })}>
    <ListVirtualizer.Content>
      {#each virtualizer.getVirtualItems() as item (item.key)}
        <ListVirtualizer.Item {item}>{items[item.index]}</ListVirtualizer.Item>
      {/each}
    </ListVirtualizer.Content>
  </ListVirtualizer.Root>
</Stack>
