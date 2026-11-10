<script lang="ts">
  import { Box } from "@isbatak/svelte-ui/box"
  import { Flex } from "@isbatak/svelte-ui/flex"
  import { ScrollArea } from "@isbatak/svelte-ui/scroll-area"
  import { css } from "styled-system/css"
</script>

<ScrollArea.Root size="xs" class={css({ w: "sm" })}>
  <ScrollArea.Viewport>
    <ScrollArea.Content class={css({ py: "4" })}>
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
