import { Bleed } from "@isbatak/solid-ui/bleed"
import { Box } from "@isbatak/solid-ui/box"

export function BleedDemo() {
  return (
    <Box w="full" maxW="sm" px="8" py="4" borderWidth="1px" borderRadius="l2" color="fg.muted">
      <Box mb="3">Padded content</Box>
      <Bleed inline="8" bg="bg.emphasized" py="4" textAlign="center" color="fg">
        Bleed
      </Bleed>
    </Box>
  )
}
