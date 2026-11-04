import { Box } from "@isbatak/solid-ui/box"
import { HStack } from "@isbatak/solid-ui/stack"

export function StackHstackDemo() {
  return (
    <HStack w="full">
      <Box h="10" flex="1" bg="bg.emphasized" borderRadius="l2" />
      <Box h="16" flex="1" bg="bg.emphasized" borderRadius="l2" />
      <Box h="10" flex="1" bg="bg.emphasized" borderRadius="l2" />
    </HStack>
  )
}
