<script setup lang="ts">
import { Bleed } from "@isbatak/vue-ui/bleed"
import { Box } from "@isbatak/vue-ui/box"
import { Stack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <Box w="full" maxW="sm" p="8" borderWidth="1px" borderRadius="l2">
    <Stack gap="4">
      <Bleed inlineStart="8" bg="bg.emphasized" p="2"> inlineStart </Bleed>
      <Bleed inlineEnd="8" bg="bg.emphasized" p="2"> inlineEnd </Bleed>
    </Stack>
  </Box>
</template>
