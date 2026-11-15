<script setup lang="ts">
import { Stack } from "@isbatak/vue-ui/stack"
import { ListVirtualizer, useListVirtualizer } from "@isbatak/vue-ui/virtualizer"

const items = Array.from({ length: 1000 }, (_, index) => `Item ${index + 1}`)

const sm = useListVirtualizer({ observeScrollElementSize: true, count: items.length, estimatedSize: () => 40 })
const md = useListVirtualizer({ observeScrollElementSize: true, count: items.length, estimatedSize: () => 48 })
const lg = useListVirtualizer({ observeScrollElementSize: true, count: items.length, estimatedSize: () => 56 })
</script>

<template>
  <Stack gap="6" maxW="xl">
    <ListVirtualizer.Root :value="sm" size="sm" :striped="true" h="40">
      <ListVirtualizer.Content>
        <ListVirtualizer.Item v-for="item in sm.getVirtualItems()" :key="item.key" :item="item">
          {{ items[item.index] }}
        </ListVirtualizer.Item>
      </ListVirtualizer.Content>
    </ListVirtualizer.Root>
    <ListVirtualizer.Root :value="md" size="md" :striped="true" h="48">
      <ListVirtualizer.Content>
        <ListVirtualizer.Item v-for="item in md.getVirtualItems()" :key="item.key" :item="item">
          {{ items[item.index] }}
        </ListVirtualizer.Item>
      </ListVirtualizer.Content>
    </ListVirtualizer.Root>
    <ListVirtualizer.Root :value="lg" size="lg" :striped="true" h="56">
      <ListVirtualizer.Content>
        <ListVirtualizer.Item v-for="item in lg.getVirtualItems()" :key="item.key" :item="item">
          {{ items[item.index] }}
        </ListVirtualizer.Item>
      </ListVirtualizer.Content>
    </ListVirtualizer.Root>
  </Stack>
</template>
