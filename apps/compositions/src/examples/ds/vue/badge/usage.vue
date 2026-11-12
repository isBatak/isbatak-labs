<script setup lang="ts">
import { Badge } from "@isbatak/vue-ui/badge"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="2">
    <Badge>Default</Badge>
    <Badge colorPalette="green">Success</Badge>
    <Badge colorPalette="red">Removed</Badge>
    <Badge colorPalette="purple">New</Badge>
  </HStack>
</template>
