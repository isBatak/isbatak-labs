<script setup lang="ts">
import { Badge } from "@isbatak/vue-ui/badge"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="2">
    <Badge variant="solid">Solid</Badge>
    <Badge variant="subtle">Subtle</Badge>
    <Badge variant="outline">Outline</Badge>
    <Badge variant="surface">Surface</Badge>
    <Badge variant="plain">Plain</Badge>
  </HStack>
</template>
