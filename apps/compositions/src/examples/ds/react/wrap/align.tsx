import { Box } from "@isbatak/react-ui/box"
import { Wrap } from "@isbatak/react-ui/wrap"

export function WrapAlignDemo() {
  return (
    <Wrap align="center" maxW="xs" h="24" bg="bg.muted" borderRadius="l2" p="2">
      <Box w="16" h="10" bg="bg.emphasized" borderRadius="l2" />
      <Box w="16" h="16" bg="bg.emphasized" borderRadius="l2" />
      <Box w="16" h="8" bg="bg.emphasized" borderRadius="l2" />
    </Wrap>
  )
}
