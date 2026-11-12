<script setup lang="ts">
import { Tag } from "@isbatak/vue-ui/tag"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="2">
    <Tag.Root variant="subtle">
      <Tag.Label>Subtle</Tag.Label>
    </Tag.Root>
    <Tag.Root variant="solid">
      <Tag.Label>Solid</Tag.Label>
    </Tag.Root>
    <Tag.Root variant="outline">
      <Tag.Label>Outline</Tag.Label>
    </Tag.Root>
    <Tag.Root variant="surface">
      <Tag.Label>Surface</Tag.Label>
    </Tag.Root>
    <Tag.Root variant="plain">
      <Tag.Label>Plain</Tag.Label>
    </Tag.Root>
  </HStack>
</template>
