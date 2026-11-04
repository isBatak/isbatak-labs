import { Box } from "@isbatak/solid-ui/box"
import { Flex } from "@isbatak/solid-ui/flex"

export function FlexAutoMarginDemo() {
  return (
    <Flex gap="4" w="full">
      <Box w="12" h="10" bg="bg.emphasized" borderRadius="l2" />
      <Box w="12" h="10" ms="auto" bg="bg.emphasized" borderRadius="l2" />
      <Box w="12" h="10" bg="bg.emphasized" borderRadius="l2" />
    </Flex>
  )
}
