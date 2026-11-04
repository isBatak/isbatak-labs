import { Box } from "@isbatak/solid-ui/box"
import { Flex } from "@isbatak/solid-ui/flex"

export function FlexDirectionDemo() {
  return (
    <Flex gap="4" direction="column" w="full">
      <Box h="10" bg="bg.emphasized" borderRadius="l2" />
      <Box h="10" bg="bg.emphasized" borderRadius="l2" />
      <Box h="10" bg="bg.emphasized" borderRadius="l2" />
    </Flex>
  )
}
