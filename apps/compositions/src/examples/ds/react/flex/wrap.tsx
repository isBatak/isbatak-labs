import { Box } from "@isbatak/react-ui/box"
import { Flex } from "@isbatak/react-ui/flex"

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
