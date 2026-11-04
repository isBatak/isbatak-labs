import { AbsoluteCenter } from "@isbatak/react-ui/absolute-center"
import { Box } from "@isbatak/react-ui/box"

export function AbsoluteCenterRtlDemo() {
  return (
    <Box dir="rtl" position="relative" h="24" w="full" maxW="sm" bg="bg.muted" borderRadius="l2">
      <AbsoluteCenter axis="horizontal" bg="bg.emphasized" px="4" py="2" borderRadius="l1">
        مرحبا
      </AbsoluteCenter>
    </Box>
  )
}
