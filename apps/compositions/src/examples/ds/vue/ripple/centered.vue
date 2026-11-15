<script setup lang="ts">
import { Center } from "@isbatak/vue-ui/center"
import { Ripple } from "@isbatak/vue-ui/ripple"
</script>

<template>
  <Ripple :asChild="true" :centered="true">
    <Center w="64" h="32" bg="bg.emphasized" borderRadius="l3" userSelect="none">Always from the center</Center>
  </Ripple>
</template>
