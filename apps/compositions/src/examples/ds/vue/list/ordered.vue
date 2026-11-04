<script setup lang="ts">
import { List } from "@isbatak/vue-ui/list"
</script>

<template>
  <List.Root :asChild="true" maxW="md">
    <ol>
      <List.Item>Install the package</List.Item>
      <List.Item>Add the preset to your Panda config</List.Item>
      <List.Item>Import the components you need</List.Item>
    </ol>
  </List.Root>
</template>
