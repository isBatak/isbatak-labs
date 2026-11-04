import { Box } from "@isbatak/solid-ui/box"
import { VStack } from "@isbatak/solid-ui/stack"

export function StackVstackDemo() {
  return (
    <VStack w="full">
      <Box h="10" w="1/2" bg="bg.emphasized" borderRadius="l2" />
      <Box h="10" w="3/4" bg="bg.emphasized" borderRadius="l2" />
      <Box h="10" w="full" bg="bg.emphasized" borderRadius="l2" />
    </VStack>
  )
}
