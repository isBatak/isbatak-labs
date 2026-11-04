<script setup lang="ts">
import { List } from "@isbatak/vue-ui/list"
</script>

<template>
  <List.Root maxW="md">
    <List.Item>First item</List.Item>
    <List.Item>
      Second item
      <List.Root ps="5">
        <List.Item>Nested item</List.Item>
        <List.Item>Nested item</List.Item>
      </List.Root>
    </List.Item>
    <List.Item>Third item</List.Item>
  </List.Root>
</template>
