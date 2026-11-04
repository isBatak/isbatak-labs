<script lang="ts">
  import { Box } from "@isbatak/svelte-ui/box"
  import { GridItem } from "@isbatak/svelte-ui/grid"
  import { SimpleGrid } from "@isbatak/svelte-ui/simple-grid"
</script>

<SimpleGrid columns={3} gap="4" w="full">
  <GridItem colSpan={2}>
    <Box h="20" bg="bg.emphasized" borderRadius="l2" />
  </GridItem>
  <GridItem colSpan={1}>
    <Box h="20" bg="bg.emphasized" borderRadius="l2" />
  </GridItem>
</SimpleGrid>
