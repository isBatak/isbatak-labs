import { AbsoluteCenter } from "@isbatak/react-ui/absolute-center"
import { Box } from "@isbatak/react-ui/box"

export function AbsoluteCenterDemo() {
  return (
    <Box position="relative" h="32" w="full" maxW="sm" bg="bg.muted" borderRadius="l2">
      <AbsoluteCenter bg="bg.emphasized" px="4" py="2" borderRadius="l1">
        Centered content
      </AbsoluteCenter>
    </Box>
  )
}
