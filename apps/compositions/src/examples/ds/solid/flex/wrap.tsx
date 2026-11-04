import { Box } from "@isbatak/solid-ui/box"
import { Flex } from "@isbatak/solid-ui/flex"

export function FlexWrapDemo() {
  return (
    <Flex gap="4" wrap="wrap" maxW="xs">
      <Box w="24" h="10" bg="bg.emphasized" borderRadius="l2" />
      <Box w="24" h="10" bg="bg.emphasized" borderRadius="l2" />
      <Box w="24" h="10" bg="bg.emphasized" borderRadius="l2" />
      <Box w="24" h="10" bg="bg.emphasized" borderRadius="l2" />
    </Flex>
  )
}
