<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Icon } from "@isbatak/vue-ui/icon"
import { Toggle } from "@isbatak/vue-ui/toggle"
</script>

<template>
  <Toggle.Root :asChild="true" aria-label="Bold">
    <Button :icon="true" variant="outline">
      <Icon name="bold" />
    </Button>
  </Toggle.Root>
</template>
