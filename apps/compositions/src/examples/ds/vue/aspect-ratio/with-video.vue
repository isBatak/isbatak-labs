<script setup lang="ts">
import { AspectRatio } from "@isbatak/vue-ui/aspect-ratio"
</script>

<template>
  <AspectRatio :ratio="16 / 9" w="full" maxW="md">
    <iframe title="Big Buck Bunny" src="https://www.youtube.com/embed/aqz-KE-bpKQ" allowfullscreen></iframe>
  </AspectRatio>
</template>
