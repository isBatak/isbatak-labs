<script setup lang="ts">
import { Grid, GridItem } from "@isbatak/vue-ui/grid"
</script>

<template>
  <Grid
    :templateAreas="`'header header' 'nav main' 'nav footer'`"
    templateColumns="10rem 1fr"
    templateRows="auto 1fr auto"
    gap="2"
    h="64"
    w="full"
    color="fg.muted"
  >
    <GridItem area="header" bg="bg.emphasized" borderRadius="l2" p="3"> Header </GridItem>
    <GridItem area="nav" bg="bg.muted" borderRadius="l2" p="3"> Nav </GridItem>
    <GridItem area="main" bg="bg.subtle" borderWidth="1px" borderRadius="l2" p="3"> Main </GridItem>
    <GridItem area="footer" bg="bg.emphasized" borderRadius="l2" p="3"> Footer </GridItem>
  </Grid>
</template>
