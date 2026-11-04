import { AbsoluteCenter } from "@isbatak/react-ui/absolute-center"
import { Box } from "@isbatak/react-ui/box"

export function AbsoluteCenterAxisDemo() {
  return (
    <Box display="flex" gap="4" w="full">
      <Box position="relative" h="24" flex="1" bg="bg.muted" borderRadius="l2">
        <AbsoluteCenter axis="horizontal" bg="bg.emphasized" px="3" py="1" borderRadius="l1">
          Horizontal
        </AbsoluteCenter>
      </Box>
      <Box position="relative" h="24" flex="1" bg="bg.muted" borderRadius="l2">
        <AbsoluteCenter axis="vertical" bg="bg.emphasized" px="3" py="1" borderRadius="l1">
          Vertical
        </AbsoluteCenter>
      </Box>
      <Box position="relative" h="24" flex="1" bg="bg.muted" borderRadius="l2">
        <AbsoluteCenter axis="both" bg="bg.emphasized" px="3" py="1" borderRadius="l1">
          Both
        </AbsoluteCenter>
      </Box>
    </Box>
  )
}
