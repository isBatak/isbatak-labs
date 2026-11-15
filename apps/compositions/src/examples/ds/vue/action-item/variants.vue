<script setup lang="ts">
import { ActionItem } from "@isbatak/vue-ui/action-item"
import { Icon } from "@isbatak/vue-ui/icon"
import { VStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <VStack gap="4" alignItems="stretch" maxW="sm">
    <ActionItem.Root variant="subtle">
      <ActionItem.Label>Subtle</ActionItem.Label>
      <ActionItem.EndElement>
        <Icon name="chevron-right" />
      </ActionItem.EndElement>
    </ActionItem.Root>
    <ActionItem.Root variant="plain">
      <ActionItem.Label>Plain</ActionItem.Label>
      <ActionItem.EndElement>
        <Icon name="chevron-right" />
      </ActionItem.EndElement>
    </ActionItem.Root>
  </VStack>
</template>
