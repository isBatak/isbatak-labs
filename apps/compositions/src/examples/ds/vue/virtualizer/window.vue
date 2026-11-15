<script setup lang="ts">
import { WindowVirtualizer, useWindowVirtualizer } from "@isbatak/vue-ui/virtualizer"

const items = Array.from({ length: 10000 }, (_, index) => `Item ${index + 1}`)

const virtualizer = useWindowVirtualizer({
  count: items.length,
  estimatedSize: () => 48,
})
</script>

<template>
  <WindowVirtualizer.Root :value="virtualizer" :striped="true" maxW="xl">
    <WindowVirtualizer.Content>
      <WindowVirtualizer.Item v-for="item in virtualizer.getVirtualItems()" :key="item.key" :item="item">
        {{ items[item.index] }}
      </WindowVirtualizer.Item>
    </WindowVirtualizer.Content>
  </WindowVirtualizer.Root>
</template>
