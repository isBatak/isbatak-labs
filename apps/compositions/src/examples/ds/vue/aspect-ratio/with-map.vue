<script setup lang="ts">
import { AspectRatio } from "@isbatak/vue-ui/aspect-ratio"
</script>

<template>
  <AspectRatio :ratio="16 / 9" w="full" maxW="md">
    <iframe
      title="Map of Zagreb"
      src="https://www.openstreetmap.org/export/embed.html?bbox=15.94,45.79,16.0,45.83&layer=mapnik"
    ></iframe>
  </AspectRatio>
</template>
