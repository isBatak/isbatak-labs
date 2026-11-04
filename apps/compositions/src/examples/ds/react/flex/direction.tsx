import { Box } from "@isbatak/react-ui/box"
import { Flex } from "@isbatak/react-ui/flex"

export function FlexDirectionDemo() {
  return (
    <Flex gap="4" direction="column" w="full">
      <Box h="10" bg="bg.emphasized" borderRadius="l2" />
      <Box h="10" bg="bg.emphasized" borderRadius="l2" />
      <Box h="10" bg="bg.emphasized" borderRadius="l2" />
    </Flex>
  )
}
