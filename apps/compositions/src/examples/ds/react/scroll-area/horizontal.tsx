import { Box } from "@isbatak/react-ui/box"
import { Flex } from "@isbatak/react-ui/flex"
import { ScrollArea } from "@isbatak/react-ui/scroll-area"

export function ScrollAreaHorizontalDemo() {
  return (
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
  )
}
