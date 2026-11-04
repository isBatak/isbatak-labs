<script setup lang="ts">
import { Box } from "@isbatak/vue-ui/box"
import { Separator } from "@isbatak/vue-ui/separator"
import { Stack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <Stack :direction="{ base: 'column', md: 'row' }" gap="4" align="stretch" color="fg.muted">
    <Box>First</Box>
    <Separator :orientation="{ base: 'horizontal', md: 'vertical' }" />
    <Box>Second</Box>
  </Stack>
</template>
