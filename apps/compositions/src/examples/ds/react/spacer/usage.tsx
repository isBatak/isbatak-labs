import { Box } from "@isbatak/react-ui/box"
import { Flex } from "@isbatak/react-ui/flex"
import { Spacer } from "@isbatak/react-ui/spacer"

export function SpacerDemo() {
  return (
    <Flex w="full" maxW="sm">
      <Box w="16" h="10" bg="bg.emphasized" borderRadius="l2" />
      <Spacer />
      <Box w="16" h="10" bg="bg.emphasized" borderRadius="l2" />
    </Flex>
  )
}
