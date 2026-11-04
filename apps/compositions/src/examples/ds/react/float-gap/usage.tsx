import { Box } from "@isbatak/react-ui/box"
import { FloatGap } from "@isbatak/react-ui/float-gap"
import { Float } from "@isbatak/react-ui/float"

export function FloatGapDemo() {
  return (
    <Box position="relative" display="inline-flex">
      <FloatGap placement="bottom-end" offset="1.5" cutoutSize="3" cutoutRadius="full">
        <Box w="12" h="12" bg="bg.inverted" borderRadius="full" />
      </FloatGap>
      <Float placement="bottom-end" offset="1.5">
        <Box w="3" h="3" bg="fg.success" borderRadius="full" />
      </Float>
    </Box>
  )
}
