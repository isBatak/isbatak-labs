import { Box } from "@isbatak/react-ui/box"
import { Stack } from "@isbatak/react-ui/stack"

export function StackHorizontalDemo() {
  return (
    <Stack direction="row" h="20" w="full">
      <Box flex="1" bg="bg.emphasized" borderRadius="l2" />
      <Box flex="1" bg="bg.emphasized" borderRadius="l2" />
      <Box flex="1" bg="bg.emphasized" borderRadius="l2" />
    </Stack>
  )
}
