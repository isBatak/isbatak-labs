<script setup lang="ts">
import { Box } from "@isbatak/vue-ui/box"
import { Grid } from "@isbatak/vue-ui/grid"
</script>

<template>
  <Box color="fg.muted">
    Text before
    <Grid :inline="true" :columns="2" gap="1" mx="2" verticalAlign="middle">
      <Box w="4" h="4" bg="bg.emphasized" borderRadius="l2" />
      <Box w="4" h="4" bg="bg.emphasized" borderRadius="l2" />
      <Box w="4" h="4" bg="bg.emphasized" borderRadius="l2" />
      <Box w="4" h="4" bg="bg.emphasized" borderRadius="l2" />
    </Grid>
    text after
  </Box>
</template>
