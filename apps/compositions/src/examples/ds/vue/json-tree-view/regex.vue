<script setup lang="ts">
import { JsonTreeView } from "@isbatak/vue-ui/json-tree-view"

const data = {
  regex: /^[a-z0-9]+/g,
  case_insensitive: /^(?:[a-z0-9]+)foo.*?/i,
}
</script>

<template>
  <JsonTreeView.Root :defaultExpandedDepth="1" :data="data">
    <JsonTreeView.Tree />
  </JsonTreeView.Root>
</template>
