<script setup lang="ts">
import { Stack } from "@isbatak/vue-ui/stack"
import { ListVirtualizer, useListVirtualizer } from "@isbatak/vue-ui/virtualizer"

const items = Array.from({ length: 1000 }, (_, index) => `Item ${index + 1}`)

const outline = useListVirtualizer({ observeScrollElementSize: true, count: items.length, estimatedSize: () => 48 })
const subtle = useListVirtualizer({ observeScrollElementSize: true, count: items.length, estimatedSize: () => 48 })
const plain = useListVirtualizer({ observeScrollElementSize: true, count: items.length, estimatedSize: () => 48 })
</script>

<template>
  <Stack gap="6" maxW="xl">
    <ListVirtualizer.Root :value="outline" variant="outline" h="48">
      <ListVirtualizer.Content>
        <ListVirtualizer.Item v-for="item in outline.getVirtualItems()" :key="item.key" :item="item">
          {{ items[item.index] }}
        </ListVirtualizer.Item>
      </ListVirtualizer.Content>
    </ListVirtualizer.Root>
    <ListVirtualizer.Root :value="subtle" variant="subtle" h="48">
      <ListVirtualizer.Content>
        <ListVirtualizer.Item v-for="item in subtle.getVirtualItems()" :key="item.key" :item="item">
          {{ items[item.index] }}
        </ListVirtualizer.Item>
      </ListVirtualizer.Content>
    </ListVirtualizer.Root>
    <ListVirtualizer.Root :value="plain" variant="plain" h="48">
      <ListVirtualizer.Content>
        <ListVirtualizer.Item v-for="item in plain.getVirtualItems()" :key="item.key" :item="item">
          {{ items[item.index] }}
        </ListVirtualizer.Item>
      </ListVirtualizer.Content>
    </ListVirtualizer.Root>
  </Stack>
</template>
