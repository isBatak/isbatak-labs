<script setup lang="ts">
import { Icon } from "@isbatak/vue-ui/icon"
import { Tag } from "@isbatak/vue-ui/tag"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="2">
    <Tag.Root>
      <Tag.StartElement>
        <Icon name="star" />
      </Tag.StartElement>
      <Tag.Label>Tag 1</Tag.Label>
      <Tag.EndElement>
        <Tag.CloseTrigger />
      </Tag.EndElement>
    </Tag.Root>
    <Tag.Root>
      <Tag.Label>Tag 2</Tag.Label>
      <Tag.EndElement>
        <Tag.CloseTrigger />
      </Tag.EndElement>
    </Tag.Root>
  </HStack>
</template>
