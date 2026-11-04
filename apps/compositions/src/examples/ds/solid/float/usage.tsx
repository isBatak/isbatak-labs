import { Box } from "@isbatak/solid-ui/box"
import { Float } from "@isbatak/solid-ui/float"

export function FloatDemo() {
  return (
    <Box position="relative" w="20" h="20" bg="bg.emphasized" borderRadius="l2">
      <Float>
        <Box w="4" h="4" bg="bg.inverted" borderRadius="full" />
      </Float>
    </Box>
  )
}
