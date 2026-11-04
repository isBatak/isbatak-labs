import { Bleed } from "@isbatak/react-ui/bleed"
import { Box } from "@isbatak/react-ui/box"

export function BleedVerticalDemo() {
  return (
    <Box w="full" maxW="sm" p="8" borderWidth="1px" borderRadius="l2">
      <Bleed block="8" bg="bg.emphasized" px="4" py="6" textAlign="center">
        Bleed
      </Bleed>
    </Box>
  )
}
