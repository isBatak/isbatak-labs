<script setup lang="ts">
import { Box } from "@isbatak/vue-ui/box"
</script>

<template>
  <Box :asChild="true" color="fg.muted" textDecoration="underline" :_hover="{ color: 'fg' }">
    <a href="#box">Rendered as a link</a>
  </Box>
</template>
