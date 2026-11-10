<script lang="ts">
  import { Box } from "@isbatak/svelte-ui/box"
  import { ScrollArea } from "@isbatak/svelte-ui/scroll-area"
  import { css } from "styled-system/css"
</script>

<ScrollArea.Root shadowOverflow class={css({ h: "80", maxW: "lg" })}>
  <ScrollArea.Viewport>
    <ScrollArea.Content class={css({ spaceY: "4" })}>
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
