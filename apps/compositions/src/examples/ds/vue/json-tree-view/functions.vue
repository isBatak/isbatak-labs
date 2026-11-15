<script setup lang="ts">
import { JsonTreeView } from "@isbatak/vue-ui/json-tree-view"

const data = [
  function sum(a: number, b: number) {
    return a + b
  },
  async (promises: Promise<unknown>[]) => await Promise.all(promises),
  function* generator(a: number) {
    while (a > 0) {
      yield a - 1
    }
  },
]
</script>

<template>
  <JsonTreeView.Root :defaultExpandedDepth="1" :data="data">
    <JsonTreeView.Tree />
  </JsonTreeView.Root>
</template>
