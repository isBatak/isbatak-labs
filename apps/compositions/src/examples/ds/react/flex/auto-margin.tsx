import { Box } from "@isbatak/react-ui/box"
import { Flex } from "@isbatak/react-ui/flex"

export function FlexAutoMarginDemo() {
  return (
    <Flex gap="4" w="full">
      <Box w="12" h="10" bg="bg.emphasized" borderRadius="l2" />
      <Box w="12" h="10" ms="auto" bg="bg.emphasized" borderRadius="l2" />
      <Box w="12" h="10" bg="bg.emphasized" borderRadius="l2" />
    </Flex>
  )
}
