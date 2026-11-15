<script setup lang="ts">
import { ActionItem } from "@isbatak/vue-ui/action-item"
import { Icon } from "@isbatak/vue-ui/icon"
import { Text } from "@isbatak/vue-ui/text"
</script>

<template>
  <ActionItem.Root maxW="sm">
    <ActionItem.StartElement>
      <Icon name="mail" />
    </ActionItem.StartElement>
    <ActionItem.Label>
      Email
      <Text as="span" textStyle="sm" fontWeight="normal" color="fg.muted">berthe.morisot@example.com</Text>
    </ActionItem.Label>
    <ActionItem.EndElement>
      <Icon name="chevron-right" />
    </ActionItem.EndElement>
  </ActionItem.Root>
</template>
