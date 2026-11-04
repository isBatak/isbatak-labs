<script setup lang="ts">
import { Icon } from "@isbatak/vue-ui/icon"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="4">
    <Icon name="bell" size="lg" color="fg.error" />
    <Icon name="bell" size="lg" color="fg.success" />
    <Icon name="bell" size="lg" color="fg.info" />
  </HStack>
</template>
