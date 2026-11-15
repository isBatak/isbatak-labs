<script setup lang="ts">
import { Center } from "@isbatak/vue-ui/center"
import { Ripple } from "@isbatak/vue-ui/ripple"
</script>

<template>
  <Ripple :asChild="true" :disabled="true">
    <Center w="64" h="32" bg="bg.emphasized" borderRadius="l3" userSelect="none">No ripple</Center>
  </Ripple>
</template>
