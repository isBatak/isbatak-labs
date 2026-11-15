<script setup lang="ts">
import { Text } from "@isbatak/vue-ui/text"
import { ListVirtualizer, useListVirtualizer } from "@isbatak/vue-ui/virtualizer"

const items = Array.from({ length: 10000 }, (_, index) => ({
  title: `Item ${index + 1}`,
  lines: Array.from({ length: (index % 4) + 1 }, (_, line) => `Line ${line + 1} of item ${index + 1}`),
}))

const virtualizer = useListVirtualizer({
  observeScrollElementSize: true,
  count: items.length,
  estimatedSize: () => 64,
})
</script>

<template>
  <ListVirtualizer.Root :value="virtualizer" :striped="true" h="96" maxW="xl">
    <ListVirtualizer.Content>
      <ListVirtualizer.Item
        v-for="item in virtualizer.getVirtualItems()"
        :key="item.key"
        :item="item"
        measure
        flexDirection="column"
        alignItems="flex-start"
      >
        <Text fontWeight="semibold">{{ items[item.index]?.title }}</Text>
        <Text v-for="line in items[item.index]?.lines" :key="line" color="fg.muted">{{ line }}</Text>
      </ListVirtualizer.Item>
    </ListVirtualizer.Content>
  </ListVirtualizer.Root>
</template>
