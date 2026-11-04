<script lang="ts">
  import { Box } from "@isbatak/svelte-ui/box"
  import { FloatGap } from "@isbatak/svelte-ui/float-gap"
  import { Float } from "@isbatak/svelte-ui/float"
</script>

<Box position="relative" display="inline-flex">
  <FloatGap placement="bottom-end" offset="1.5" cutoutSize="3" cutoutRadius="full">
    <Box w="12" h="12" bg="bg.inverted" borderRadius="full" />
  </FloatGap>
  <Float placement="bottom-end" offset="1.5">
    <Box w="3" h="3" bg="fg.success" borderRadius="full" />
  </Float>
</Box>
