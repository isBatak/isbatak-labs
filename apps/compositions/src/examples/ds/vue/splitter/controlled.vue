<script setup lang="ts">
import { Splitter } from "@isbatak/vue-ui/splitter"
import { ref } from "vue"

const size = ref([30, 70])
</script>

<template>
  <Splitter.Root :panels="[{ id: 'a' }, { id: 'b' }]" v-model:size="size" minH="60" borderWidth="1px" borderRadius="l2">
    <Splitter.Panel id="a" display="flex" alignItems="center" justifyContent="center" textStyle="sm" color="fg.muted"
      >{{ Math.round(size[0] ?? 0) }}%</Splitter.Panel
    >
    <Splitter.ResizeTrigger id="a:b" />
    <Splitter.Panel id="b" display="flex" alignItems="center" justifyContent="center" textStyle="sm" color="fg.muted"
      >{{ Math.round(size[1] ?? 0) }}%</Splitter.Panel
    >
  </Splitter.Root>
</template>
