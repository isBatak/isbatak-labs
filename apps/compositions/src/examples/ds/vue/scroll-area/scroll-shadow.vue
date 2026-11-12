<script setup lang="ts">
import { Box } from "@isbatak/vue-ui/box"
import { ScrollArea } from "@isbatak/vue-ui/scroll-area"
</script>

<template>
  <ScrollArea.Root h="80" maxW="lg" :shadowOverflow="true">
    <ScrollArea.Viewport>
      <ScrollArea.Content spaceY="4">
        <Box h="20" bg="bg.emphasized" borderRadius="l2" />
        <Box h="20" bg="bg.emphasized" borderRadius="l2" />
        <Box h="20" bg="bg.emphasized" borderRadius="l2" />
        <Box h="20" bg="bg.emphasized" borderRadius="l2" />
        <Box h="20" bg="bg.emphasized" borderRadius="l2" />
        <Box h="20" bg="bg.emphasized" borderRadius="l2" />
        <Box h="20" bg="bg.emphasized" borderRadius="l2" />
        <Box h="20" bg="bg.emphasized" borderRadius="l2" />
      </ScrollArea.Content>
    </ScrollArea.Viewport>
    <ScrollArea.Scrollbar />
  </ScrollArea.Root>
</template>
