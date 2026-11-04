import { Box } from "@isbatak/solid-ui/box"
import { Grid, GridItem } from "@isbatak/solid-ui/grid"

export function GridColSpanDemo() {
  return (
    <Grid columns={4} gap="4" w="full">
      <GridItem colSpan={2}>
        <Box h="20" bg="bg.emphasized" borderRadius="l2" />
      </GridItem>
      <GridItem colSpan={1}>
        <Box h="20" bg="bg.emphasized" borderRadius="l2" />
      </GridItem>
      <GridItem colSpan={1}>
        <Box h="20" bg="bg.emphasized" borderRadius="l2" />
      </GridItem>
    </Grid>
  )
}
