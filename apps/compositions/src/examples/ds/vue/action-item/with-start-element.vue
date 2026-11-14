<script setup lang="ts">
import { ActionItem } from "@isbatak/vue-ui/action-item"
import { Icon } from "@isbatak/vue-ui/icon"
import { VStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <VStack gap="2" alignItems="stretch" maxW="sm">
    <ActionItem.Root>
      <ActionItem.StartElement>
        <Icon name="settings" />
      </ActionItem.StartElement>
      <ActionItem.Label>Settings</ActionItem.Label>
      <ActionItem.EndElement>
        <Icon name="chevron-right" />
      </ActionItem.EndElement>
    </ActionItem.Root>
    <ActionItem.Root>
      <ActionItem.StartElement>
        <Icon name="bell" />
      </ActionItem.StartElement>
      <ActionItem.Label>Notifications</ActionItem.Label>
      <ActionItem.EndElement>
        <Icon name="chevron-right" />
      </ActionItem.EndElement>
    </ActionItem.Root>
    <ActionItem.Root>
      <ActionItem.StartElement>
        <Icon name="lock" />
      </ActionItem.StartElement>
      <ActionItem.Label>Privacy</ActionItem.Label>
      <ActionItem.EndElement>
        <Icon name="chevron-right" />
      </ActionItem.EndElement>
    </ActionItem.Root>
  </VStack>
</template>
