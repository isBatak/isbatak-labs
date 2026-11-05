<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="4">
    <Button :loading="true">Click me</Button>
    <Button :loading="true" loadingText="Saving…"> Click me </Button>
  </HStack>
</template>
