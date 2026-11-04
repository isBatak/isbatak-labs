import { Box } from "@isbatak/react-ui/box"
import { Stack, StackSeparator } from "@isbatak/react-ui/stack"

export function StackWithSeparatorElementDemo() {
  return (
    <Stack separator={<StackSeparator bg="border.emphasized" />} w="full">
      <Box h="10" bg="bg.emphasized" borderRadius="l2" />
      <Box h="10" bg="bg.emphasized" borderRadius="l2" />
      <Box h="10" bg="bg.emphasized" borderRadius="l2" />
    </Stack>
  )
}
