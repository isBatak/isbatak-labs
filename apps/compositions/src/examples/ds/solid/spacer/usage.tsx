import { Box } from "@isbatak/solid-ui/box"
import { Flex } from "@isbatak/solid-ui/flex"
import { Spacer } from "@isbatak/solid-ui/spacer"

export function SpacerDemo() {
  return (
    <Flex w="full" maxW="sm">
      <Box w="16" h="10" bg="bg.emphasized" borderRadius="l2" />
      <Spacer />
      <Box w="16" h="10" bg="bg.emphasized" borderRadius="l2" />
    </Flex>
  )
}
