<script setup lang="ts">
import { AspectRatio } from "@isbatak/vue-ui/aspect-ratio"
</script>

<template>
  <AspectRatio :ratio="4 / 3" w="full" maxW="xs" borderRadius="l2" overflow="hidden">
    <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=640" alt="A lake between mountains" />
  </AspectRatio>
</template>
