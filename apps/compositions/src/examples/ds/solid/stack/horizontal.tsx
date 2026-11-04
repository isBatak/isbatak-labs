import { Box } from "@isbatak/solid-ui/box"
import { Stack } from "@isbatak/solid-ui/stack"

export function StackHorizontalDemo() {
  return (
    <Stack direction="row" h="20" w="full">
      <Box flex="1" bg="bg.emphasized" borderRadius="l2" />
      <Box flex="1" bg="bg.emphasized" borderRadius="l2" />
      <Box flex="1" bg="bg.emphasized" borderRadius="l2" />
    </Stack>
  )
}
