<script setup lang="ts">
import { Avatar } from "@isbatak/vue-ui/avatar"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="3">
    <Avatar.Root variant="solid">
      <Avatar.Fallback name="Jane Doe" />
    </Avatar.Root>
    <Avatar.Root variant="outline">
      <Avatar.Fallback name="Jane Doe" />
    </Avatar.Root>
    <Avatar.Root variant="subtle">
      <Avatar.Fallback name="Jane Doe" />
    </Avatar.Root>
  </HStack>
</template>
