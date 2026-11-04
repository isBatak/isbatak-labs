<script lang="ts">
  import { Box } from "@isbatak/svelte-ui/box"
  import { Stack } from "@isbatak/svelte-ui/stack"
</script>

<Stack separator direction={{ base: "column", md: "row" }} gap="4" w="full">
  <Box h="10" flex="1" bg="bg.emphasized" borderRadius="l2" />
  <Box h="10" flex="1" bg="bg.emphasized" borderRadius="l2" />
  <Box h="10" flex="1" bg="bg.emphasized" borderRadius="l2" />
</Stack>
