<script setup lang="ts">
import { IconButton } from "@isbatak/vue-ui/button"
import { Icon } from "@isbatak/vue-ui/icon"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="4">
    <IconButton aria-label="Search" variant="solid">
      <Icon name="search" />
    </IconButton>
    <IconButton aria-label="Search" variant="outline">
      <Icon name="search" />
    </IconButton>
    <IconButton aria-label="Search" variant="ghost">
      <Icon name="search" />
    </IconButton>
  </HStack>
</template>
