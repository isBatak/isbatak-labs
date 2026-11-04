import { Box } from "@isbatak/solid-ui/box"
import { FloatGap } from "@isbatak/solid-ui/float-gap"
import { Float } from "@isbatak/solid-ui/float"

export function FloatGapPlacementsDemo() {
  return (
    <Box display="flex" gap="8">
      <Box position="relative" display="inline-flex">
        <FloatGap placement="top-end" offset="1.5" cutoutSize="3" cutoutRadius="full">
          <Box w="12" h="12" bg="bg.inverted" borderRadius="l2" />
        </FloatGap>
        <Float placement="top-end" offset="1.5">
          <Box w="3" h="3" bg="fg.error" borderRadius="full" />
        </Float>
      </Box>
      <Box position="relative" display="inline-flex">
        <FloatGap placement="bottom-start" offset="1.5" cutoutSize="3" cutoutRadius="full">
          <Box w="12" h="12" bg="bg.inverted" borderRadius="l2" />
        </FloatGap>
        <Float placement="bottom-start" offset="1.5">
          <Box w="3" h="3" bg="fg.warning" borderRadius="full" />
        </Float>
      </Box>
      <Box position="relative" display="inline-flex">
        <FloatGap placement="middle-end" cutoutWidth="2" cutoutHeight="6" cutoutRadius="full">
          <Box w="12" h="12" bg="bg.inverted" borderRadius="l2" />
        </FloatGap>
        <Float placement="middle-end">
          <Box w="2" h="6" bg="fg.info" borderRadius="full" />
        </Float>
      </Box>
    </Box>
  )
}
