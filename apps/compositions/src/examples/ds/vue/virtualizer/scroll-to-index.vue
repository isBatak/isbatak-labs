<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Stack } from "@isbatak/vue-ui/stack"
import { ListVirtualizer, useListVirtualizer } from "@isbatak/vue-ui/virtualizer"

const items = Array.from({ length: 10000 }, (_, index) => `Item ${index + 1}`)

const virtualizer = useListVirtualizer({
  observeScrollElementSize: true,
  count: items.length,
  estimatedSize: () => 48,
})
</script>

<template>
  <Stack gap="3" maxW="xl">
    <Stack direction="row" gap="2" wrap="wrap">
      <Button size="sm" variant="outline" @click="virtualizer.scrollToIndex(0)">Scroll to top</Button>
      <Button
        size="sm"
        variant="outline"
        @click="virtualizer.scrollToIndex(Math.floor(items.length / 2), { align: 'center' })"
      >
        Scroll to middle
      </Button>
      <Button size="sm" variant="outline" @click="virtualizer.scrollToIndex(items.length - 1)">Scroll to bottom</Button>
    </Stack>
    <ListVirtualizer.Root :value="virtualizer" :striped="true" h="96">
      <ListVirtualizer.Content>
        <ListVirtualizer.Item v-for="item in virtualizer.getVirtualItems()" :key="item.key" :item="item">
          {{ items[item.index] }}
        </ListVirtualizer.Item>
      </ListVirtualizer.Content>
    </ListVirtualizer.Root>
  </Stack>
</template>
