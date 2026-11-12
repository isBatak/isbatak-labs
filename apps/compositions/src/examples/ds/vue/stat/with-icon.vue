<script setup lang="ts">
import { Stat } from "@isbatak/vue-ui/stat"
import { HStack } from "@isbatak/vue-ui/stack"
import { Icon } from "@isbatak/vue-ui/icon"
</script>

<template>
  <Stat.Root :card="true" maxW="xs">
    <HStack justifyContent="space-between">
      <Stat.Label>Sales</Stat.Label>
      <Icon name="shopping-bag" color="fg.muted" />
    </HStack>
    <Stat.ValueText>$4.24k</Stat.ValueText>
  </Stat.Root>
</template>
