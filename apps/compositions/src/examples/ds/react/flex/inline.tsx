import { Box } from "@isbatak/react-ui/box"
import { Flex } from "@isbatak/react-ui/flex"

export function FlexInlineDemo() {
  return (
    <Box color="fg.muted">
      Text before
      <Flex inline gap="2" mx="2" verticalAlign="middle">
        <Box w="6" h="6" bg="bg.emphasized" borderRadius="l2" />
        <Box w="6" h="6" bg="bg.emphasized" borderRadius="l2" />
      </Flex>
      text after
    </Box>
  )
}
