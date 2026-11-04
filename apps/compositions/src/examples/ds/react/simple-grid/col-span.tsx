import { Box } from "@isbatak/react-ui/box"
import { GridItem } from "@isbatak/react-ui/grid"
import { SimpleGrid } from "@isbatak/react-ui/simple-grid"

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
