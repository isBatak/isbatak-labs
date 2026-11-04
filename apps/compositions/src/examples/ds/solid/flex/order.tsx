import { Box } from "@isbatak/solid-ui/box"
import { Flex } from "@isbatak/solid-ui/flex"

export function FlexOrderDemo() {
  return (
    <Flex gap="4">
      <Box order="3" bg="bg.emphasized" borderRadius="l2" p="3">
        One
      </Box>
      <Box order="1" bg="bg.emphasized" borderRadius="l2" p="3">
        Two
      </Box>
      <Box order="2" bg="bg.emphasized" borderRadius="l2" p="3">
        Three
      </Box>
    </Flex>
  )
}
