<script setup lang="ts">
import { JsonTreeView } from "@isbatak/vue-ui/json-tree-view"

const data = new Error("Error")
</script>

<template>
  <JsonTreeView.Root :defaultExpandedDepth="1" :data="data">
    <JsonTreeView.Tree />
  </JsonTreeView.Root>
</template>
