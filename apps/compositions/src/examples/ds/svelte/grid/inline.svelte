<script lang="ts">
  import { Box } from "@isbatak/svelte-ui/box"
  import { Grid } from "@isbatak/svelte-ui/grid"
</script>

<Box color="fg.muted">
  Text before
  <Grid inline columns={2} gap="1" mx="2" verticalAlign="middle">
    <Box w="4" h="4" bg="bg.emphasized" borderRadius="l2" />
    <Box w="4" h="4" bg="bg.emphasized" borderRadius="l2" />
    <Box w="4" h="4" bg="bg.emphasized" borderRadius="l2" />
    <Box w="4" h="4" bg="bg.emphasized" borderRadius="l2" />
  </Grid>
  text after
</Box>
