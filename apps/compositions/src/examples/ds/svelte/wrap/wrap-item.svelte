<script lang="ts">
  import { Box } from "@isbatak/svelte-ui/box"
  import { Wrap, WrapItem } from "@isbatak/svelte-ui/wrap"
</script>

<Wrap maxW="xs">
  <WrapItem>
    <Box w="20" h="10" bg="bg.emphasized" borderRadius="l2" />
  </WrapItem>
  <WrapItem>
    <Box w="20" h="16" bg="bg.emphasized" borderRadius="l2" />
  </WrapItem>
  <WrapItem>
    <Box w="20" h="8" bg="bg.emphasized" borderRadius="l2" />
  </WrapItem>
</Wrap>
