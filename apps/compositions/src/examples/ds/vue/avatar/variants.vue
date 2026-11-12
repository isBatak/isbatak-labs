<script setup lang="ts">
import { Avatar } from "@isbatak/vue-ui/avatar"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="3">
    <Avatar.Root variant="solid">
      <Avatar.Fallback name="Segun Adebayo" />
    </Avatar.Root>
    <Avatar.Root variant="outline">
      <Avatar.Fallback name="Segun Adebayo" />
    </Avatar.Root>
    <Avatar.Root variant="subtle">
      <Avatar.Fallback name="Segun Adebayo" />
    </Avatar.Root>
  </HStack>
</template>
