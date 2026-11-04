import { AbsoluteCenter } from "@isbatak/solid-ui/absolute-center"
import { Box } from "@isbatak/solid-ui/box"

export function CenterWithAbsoluteDemo() {
  return (
    <Box position="relative" h="24" w="full" maxW="sm" bg="bg.muted" borderRadius="l2">
      <AbsoluteCenter bg="bg.emphasized" px="4" py="2" borderRadius="l1">
        Centered
      </AbsoluteCenter>
    </Box>
  )
}
