<script setup lang="ts">
import { EmptyState } from "@isbatak/vue-ui/empty-state"
import { Icon } from "@isbatak/vue-ui/icon"
</script>

<template>
  <EmptyState.Root>
    <EmptyState.Content>
      <EmptyState.Indicator><Icon name="search" /></EmptyState.Indicator>
      <EmptyState.Title>No results found</EmptyState.Title>
      <EmptyState.Description>Try adjusting your search or filters</EmptyState.Description>
    </EmptyState.Content>
  </EmptyState.Root>
</template>
