<script setup lang="ts">
import { AspectRatio } from "@isbatak/vue-ui/aspect-ratio"
import { Center } from "@isbatak/vue-ui/center"
</script>

<template>
  <AspectRatio :ratio="2" w="full" maxW="sm">
    <Center bg="bg.emphasized" borderRadius="l2">2 / 1</Center>
  </AspectRatio>
</template>
