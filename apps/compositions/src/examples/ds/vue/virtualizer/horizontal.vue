<script setup lang="ts">
import { ListVirtualizer, useListVirtualizer } from "@isbatak/vue-ui/virtualizer"

const items = Array.from({ length: 10000 }, (_, index) => `${index + 1}`)

const virtualizer = useListVirtualizer({
  observeScrollElementSize: true,
  count: items.length,
  orientation: "horizontal",
  estimatedSize: () => 80,
})
</script>

<template>
  <ListVirtualizer.Root :value="virtualizer" orientation="horizontal" :striped="true" h="48" maxW="xl">
    <ListVirtualizer.Content>
      <ListVirtualizer.Item v-for="item in virtualizer.getVirtualItems()" :key="item.key" :item="item">
        {{ items[item.index] }}
      </ListVirtualizer.Item>
    </ListVirtualizer.Content>
  </ListVirtualizer.Root>
</template>
