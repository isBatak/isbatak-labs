import { Box } from "@isbatak/solid-ui/box"
import { Flex } from "@isbatak/solid-ui/flex"

export function FlexAlignDemo() {
  return (
    <Flex gap="4" align="center" h="24">
      <Box w="12" h="12" bg="bg.emphasized" borderRadius="l2" />
      <Box w="12" h="20" bg="bg.emphasized" borderRadius="l2" />
      <Box w="12" h="8" bg="bg.emphasized" borderRadius="l2" />
    </Flex>
  )
}
