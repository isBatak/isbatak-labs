import { Box } from "@isbatak/solid-ui/box"
import { SimpleGrid } from "@isbatak/solid-ui/simple-grid"

export function SimpleGridRowAndColumnGapDemo() {
  return (
    <SimpleGrid columns={2} columnGap="2" rowGap="6" w="full">
      <Box h="20" bg="bg.emphasized" borderRadius="l2" />
      <Box h="20" bg="bg.emphasized" borderRadius="l2" />
      <Box h="20" bg="bg.emphasized" borderRadius="l2" />
      <Box h="20" bg="bg.emphasized" borderRadius="l2" />
    </SimpleGrid>
  )
}
