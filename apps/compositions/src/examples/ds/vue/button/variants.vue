<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack flexWrap="wrap" gap="4">
    <Button variant="solid">Solid</Button>
    <Button variant="subtle">Subtle</Button>
    <Button variant="surface">Surface</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="plain">Plain</Button>
  </HStack>
</template>
