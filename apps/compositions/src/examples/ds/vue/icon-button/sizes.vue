<script setup lang="ts">
import { IconButton } from "@isbatak/vue-ui/button"
import { Icon } from "@isbatak/vue-ui/icon"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="4">
    <IconButton aria-label="Like" size="xs" variant="outline">
      <Icon name="heart" />
    </IconButton>
    <IconButton aria-label="Like" size="sm" variant="outline">
      <Icon name="heart" />
    </IconButton>
    <IconButton aria-label="Like" size="md" variant="outline">
      <Icon name="heart" />
    </IconButton>
    <IconButton aria-label="Like" size="lg" variant="outline">
      <Icon name="heart" />
    </IconButton>
  </HStack>
</template>
