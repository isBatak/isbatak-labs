import { Box } from "@isbatak/solid-ui/box"
import { Wrap } from "@isbatak/solid-ui/wrap"

export function WrapDemo() {
  return (
    <Wrap maxW="xs">
      <Box w="20" h="10" bg="bg.emphasized" borderRadius="l2" />
      <Box w="20" h="10" bg="bg.emphasized" borderRadius="l2" />
      <Box w="20" h="10" bg="bg.emphasized" borderRadius="l2" />
      <Box w="20" h="10" bg="bg.emphasized" borderRadius="l2" />
      <Box w="20" h="10" bg="bg.emphasized" borderRadius="l2" />
    </Wrap>
  )
}
