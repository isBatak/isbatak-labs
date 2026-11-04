import { Box } from "@isbatak/react-ui/box"
import { Grid } from "@isbatak/react-ui/grid"

export function GridDemo() {
  return (
    <Grid columns={3} gap="4" w="full">
      <Box h="20" bg="bg.emphasized" borderRadius="l2" />
      <Box h="20" bg="bg.emphasized" borderRadius="l2" />
      <Box h="20" bg="bg.emphasized" borderRadius="l2" />
    </Grid>
  )
}
