<script setup lang="ts">
import { Grid, GridItem } from "@isbatak/vue-ui/grid"
</script>

<template>
  <Grid h="48" templateRows="repeat(2, 1fr)" templateColumns="repeat(5, 1fr)" gap="4" w="full">
    <GridItem :rowSpan="2" :colSpan="1" bg="bg.emphasized" borderRadius="l2" />
    <GridItem :colSpan="2" bg="bg.muted" borderRadius="l2" />
    <GridItem :colSpan="2" bg="bg.muted" borderRadius="l2" />
    <GridItem :colSpan="4" bg="bg.emphasized" borderRadius="l2" />
  </Grid>
</template>
