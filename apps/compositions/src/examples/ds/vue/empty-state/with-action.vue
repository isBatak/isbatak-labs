<script setup lang="ts">
import { EmptyState } from "@isbatak/vue-ui/empty-state"
import { Icon } from "@isbatak/vue-ui/icon"
import { Button, ButtonGroup } from "@isbatak/vue-ui/button"
</script>

<template>
  <EmptyState.Root>
    <EmptyState.Content>
      <EmptyState.Indicator><Icon name="package" /></EmptyState.Indicator>
      <EmptyState.Title>No projects yet</EmptyState.Title>
      <EmptyState.Description>Create a project to get started</EmptyState.Description>
      <ButtonGroup>
        <Button>Create project</Button>
        <Button variant="outline">Import</Button>
      </ButtonGroup>
    </EmptyState.Content>
  </EmptyState.Root>
</template>
