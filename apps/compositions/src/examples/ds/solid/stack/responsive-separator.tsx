import { Box } from "@isbatak/solid-ui/box"
import { Stack } from "@isbatak/solid-ui/stack"

export function StackResponsiveSeparatorDemo() {
  return (
    <Stack separator direction={{ base: "column", md: "row" }} gap="4" w="full">
      <Box h="10" flex="1" bg="bg.emphasized" borderRadius="l2" />
      <Box h="10" flex="1" bg="bg.emphasized" borderRadius="l2" />
      <Box h="10" flex="1" bg="bg.emphasized" borderRadius="l2" />
    </Stack>
  )
}
