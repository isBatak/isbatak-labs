import { Box } from "@isbatak/react-ui/box"
import { Wrap } from "@isbatak/react-ui/wrap"

export function WrapJustifyDemo() {
  return (
    <Wrap justify="center" w="full" maxW="xs">
      <Box w="20" h="10" bg="bg.emphasized" borderRadius="l2" />
      <Box w="20" h="10" bg="bg.emphasized" borderRadius="l2" />
      <Box w="20" h="10" bg="bg.emphasized" borderRadius="l2" />
      <Box w="20" h="10" bg="bg.emphasized" borderRadius="l2" />
    </Wrap>
  )
}
