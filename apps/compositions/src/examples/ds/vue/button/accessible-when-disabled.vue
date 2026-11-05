<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="4">
    <Button :disabled="true">Native disabled</Button>
    <Button :disabled="true" accessibleWhenDisabled> Still focusable </Button>
  </HStack>
</template>
