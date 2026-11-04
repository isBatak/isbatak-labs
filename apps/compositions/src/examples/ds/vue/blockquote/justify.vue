<script setup lang="ts">
import { Blockquote } from "@isbatak/vue-ui/blockquote"
import { Stack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <Stack gap="6" w="full" maxW="md">
    <Blockquote.Root justify="start">
      <Blockquote.Content>Start</Blockquote.Content>
    </Blockquote.Root>
    <Blockquote.Root justify="center">
      <Blockquote.Content>Center</Blockquote.Content>
    </Blockquote.Root>
    <Blockquote.Root justify="end">
      <Blockquote.Content>End</Blockquote.Content>
    </Blockquote.Root>
  </Stack>
</template>
