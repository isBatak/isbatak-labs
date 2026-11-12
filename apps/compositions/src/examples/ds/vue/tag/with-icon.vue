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
      <Tag.Label>Favorite</Tag.Label>
    </Tag.Root>
    <Tag.Root colorPalette="green">
      <Tag.Label>Verified</Tag.Label>
      <Tag.EndElement>
        <Icon name="check-circle" />
      </Tag.EndElement>
    </Tag.Root>
  </HStack>
</template>
