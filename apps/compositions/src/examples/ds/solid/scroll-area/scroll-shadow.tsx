import { Box } from "@isbatak/solid-ui/box"
import { ScrollArea } from "@isbatak/solid-ui/scroll-area"

export function ScrollAreaScrollShadowDemo() {
  return (
    <ScrollArea.Root h="80" maxW="lg" shadowOverflow>
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
  )
}
