import { Box } from "@isbatak/react-ui/box"
import { Stack } from "@isbatak/react-ui/stack"

export function StackDemo() {
  return (
    <Stack w="full">
      <Box h="10" bg="bg.emphasized" borderRadius="l2" />
      <Box h="10" bg="bg.emphasized" borderRadius="l2" />
      <Box h="10" bg="bg.emphasized" borderRadius="l2" />
    </Stack>
  )
}
