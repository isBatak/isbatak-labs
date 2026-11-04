import { Box } from "@isbatak/solid-ui/box"
import { SimpleGrid } from "@isbatak/solid-ui/simple-grid"

export function SimpleGridDemo() {
  return (
    <SimpleGrid columns={2} gap="4" w="full">
      <Box h="20" bg="bg.emphasized" borderRadius="l2" />
      <Box h="20" bg="bg.emphasized" borderRadius="l2" />
      <Box h="20" bg="bg.emphasized" borderRadius="l2" />
      <Box h="20" bg="bg.emphasized" borderRadius="l2" />
    </SimpleGrid>
  )
}
