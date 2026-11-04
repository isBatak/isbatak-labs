import { Box } from "@isbatak/react-ui/box"
import { Separator } from "@isbatak/react-ui/separator"
import { HStack, Stack } from "@isbatak/react-ui/stack"

export function SeparatorWithLabelDemo() {
  return (
    <Stack w="full" maxW="sm" color="fg.muted">
      <HStack>
        <Box flexShrink="0">Label (start)</Box>
        <Separator flex="1" />
      </HStack>
      <HStack>
        <Separator flex="1" />
        <Box flexShrink="0">Label (end)</Box>
      </HStack>
      <HStack>
        <Separator flex="1" />
        <Box flexShrink="0">Label (center)</Box>
        <Separator flex="1" />
      </HStack>
    </Stack>
  )
}
