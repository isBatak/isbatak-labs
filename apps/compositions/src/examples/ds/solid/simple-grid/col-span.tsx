import { Box } from "@isbatak/solid-ui/box"
import { GridItem } from "@isbatak/solid-ui/grid"
import { SimpleGrid } from "@isbatak/solid-ui/simple-grid"

export function SimpleGridColSpanDemo() {
  return (
    <SimpleGrid columns={3} gap="4" w="full">
      <GridItem colSpan={2}>
        <Box h="20" bg="bg.emphasized" borderRadius="l2" />
      </GridItem>
      <GridItem colSpan={1}>
        <Box h="20" bg="bg.emphasized" borderRadius="l2" />
      </GridItem>
    </SimpleGrid>
  )
}
