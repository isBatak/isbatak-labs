<script setup lang="ts">
import { Blockquote } from "@isbatak/vue-ui/blockquote"
import { Icon } from "@isbatak/vue-ui/icon"
</script>

<template>
  <Blockquote.Root maxW="md" variant="plain">
    <Blockquote.Icon>
      <Icon name="quote-filled" />
    </Blockquote.Icon>
    <Blockquote.Content>Simplicity is prerequisite for reliability.</Blockquote.Content>
    <Blockquote.Caption>Edsger W. Dijkstra</Blockquote.Caption>
  </Blockquote.Root>
</template>
