<script setup lang="ts">
import { Box } from "@isbatak/vue-ui/box"
import { Flex } from "@isbatak/vue-ui/flex"
import { ScrollArea } from "@isbatak/vue-ui/scroll-area"
</script>

<template>
  <ScrollArea.Root w="sm" size="xs">
    <ScrollArea.Viewport>
      <ScrollArea.Content py="4">
        <Flex gap="4" flexWrap="nowrap">
          <Box h="20" w="40" flexShrink="0" bg="bg.emphasized" borderRadius="l2" />
          <Box h="20" w="40" flexShrink="0" bg="bg.emphasized" borderRadius="l2" />
          <Box h="20" w="40" flexShrink="0" bg="bg.emphasized" borderRadius="l2" />
          <Box h="20" w="40" flexShrink="0" bg="bg.emphasized" borderRadius="l2" />
          <Box h="20" w="40" flexShrink="0" bg="bg.emphasized" borderRadius="l2" />
          <Box h="20" w="40" flexShrink="0" bg="bg.emphasized" borderRadius="l2" />
        </Flex>
      </ScrollArea.Content>
    </ScrollArea.Viewport>
    <ScrollArea.Scrollbar orientation="horizontal" />
    <ScrollArea.Corner />
  </ScrollArea.Root>
</template>
