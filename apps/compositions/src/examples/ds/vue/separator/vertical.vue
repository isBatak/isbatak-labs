<script setup lang="ts">
import { Separator } from "@isbatak/vue-ui/separator"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="4" h="6" color="fg.muted">
    First
    <Separator orientation="vertical" />
    Second
    <Separator orientation="vertical" />
    Third
  </HStack>
</template>
