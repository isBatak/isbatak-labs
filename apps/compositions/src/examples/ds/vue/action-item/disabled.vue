<script setup lang="ts">
import { ActionItem } from "@isbatak/vue-ui/action-item"
import { Icon } from "@isbatak/vue-ui/icon"
</script>

<template>
  <ActionItem.Root maxW="sm" data-disabled="" aria-disabled="true">
    <ActionItem.Label>Delete account</ActionItem.Label>
    <ActionItem.EndElement>
      <Icon name="chevron-right" />
    </ActionItem.EndElement>
  </ActionItem.Root>
</template>
