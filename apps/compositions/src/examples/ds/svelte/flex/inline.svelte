<script lang="ts">
  import { Box } from "@isbatak/svelte-ui/box"
  import { Flex } from "@isbatak/svelte-ui/flex"
</script>

<Box color="fg.muted">
  Text before
  <Flex inline gap="2" mx="2" verticalAlign="middle">
    <Box w="6" h="6" bg="bg.emphasized" borderRadius="l2" />
    <Box w="6" h="6" bg="bg.emphasized" borderRadius="l2" />
  </Flex>
  text after
</Box>
