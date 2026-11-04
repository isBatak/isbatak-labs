<script setup lang="ts">
import { Box } from "@isbatak/vue-ui/box"
import { Separator } from "@isbatak/vue-ui/separator"
import { HStack, Stack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <Stack w="full" maxW="sm" color="fg.muted">
    <HStack>
      <Box flexShrink="0">Label (start)</Box>
      <Separator flex="1" />
    </HStack>
    <HStack>
      <Separator flex="1" />
      <Box flexShrink="0">Label (end)</Box>
    </HStack>
    <HStack>
      <Separator flex="1" />
      <Box flexShrink="0">Label (center)</Box>
      <Separator flex="1" />
    </HStack>
  </Stack>
</template>
