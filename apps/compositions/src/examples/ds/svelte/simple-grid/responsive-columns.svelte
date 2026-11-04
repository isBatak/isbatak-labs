<script lang="ts">
  import { Box } from "@isbatak/svelte-ui/box"
  import { SimpleGrid } from "@isbatak/svelte-ui/simple-grid"
</script>

<SimpleGrid columns={{ base: 2, md: 4 }} gap="4" w="full">
  <Box h="20" bg="bg.emphasized" borderRadius="l2" />
  <Box h="20" bg="bg.emphasized" borderRadius="l2" />
  <Box h="20" bg="bg.emphasized" borderRadius="l2" />
  <Box h="20" bg="bg.emphasized" borderRadius="l2" />
</SimpleGrid>
