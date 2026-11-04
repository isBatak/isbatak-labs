import { Box } from "@isbatak/solid-ui/box"
import { Wrap } from "@isbatak/solid-ui/wrap"

export function WrapResponsiveDemo() {
  return (
    <Wrap gap={{ base: "2", md: "6" }} maxW="sm">
      <Box w="20" h="10" bg="bg.emphasized" borderRadius="l2" />
      <Box w="20" h="10" bg="bg.emphasized" borderRadius="l2" />
      <Box w="20" h="10" bg="bg.emphasized" borderRadius="l2" />
      <Box w="20" h="10" bg="bg.emphasized" borderRadius="l2" />
    </Wrap>
  )
}
