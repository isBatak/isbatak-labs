<script setup lang="ts">
import { JsonTreeView } from "@isbatak/vue-ui/json-tree-view"
import { Stack } from "@isbatak/vue-ui/stack"

const data = {
  name: "John Doe",
  age: 30,
  active: true,
  tags: ["tag1", "tag2"],
}
</script>

<template>
  <Stack gap="6">
    <JsonTreeView.Root size="sm" :defaultExpandedDepth="1" :data="data">
      <JsonTreeView.Tree />
    </JsonTreeView.Root>
    <JsonTreeView.Root size="md" :defaultExpandedDepth="1" :data="data">
      <JsonTreeView.Tree />
    </JsonTreeView.Root>
    <JsonTreeView.Root size="lg" :defaultExpandedDepth="1" :data="data">
      <JsonTreeView.Tree />
    </JsonTreeView.Root>
  </Stack>
</template>
