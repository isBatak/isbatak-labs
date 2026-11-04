<script setup lang="ts">
import { Box } from "@isbatak/vue-ui/box"
import { Grid } from "@isbatak/vue-ui/grid"
</script>

<template>
  <Grid :columns="3" gap="4" w="full">
    <Box h="20" bg="bg.emphasized" borderRadius="l2" />
    <Box h="20" bg="bg.emphasized" borderRadius="l2" />
    <Box h="20" bg="bg.emphasized" borderRadius="l2" />
  </Grid>
</template>
