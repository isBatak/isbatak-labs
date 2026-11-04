import { Box } from "@isbatak/react-ui/box"
import { Flex } from "@isbatak/react-ui/flex"

export function FlexDemo() {
  return (
    <Flex gap="4">
      <Box h="10" flex="1" bg="bg.emphasized" borderRadius="l2" />
      <Box h="10" flex="1" bg="bg.emphasized" borderRadius="l2" />
      <Box h="10" flex="1" bg="bg.emphasized" borderRadius="l2" />
    </Flex>
  )
}
