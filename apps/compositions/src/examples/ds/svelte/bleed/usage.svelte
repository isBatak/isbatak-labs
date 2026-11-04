<script lang="ts">
  import { Bleed } from "@isbatak/svelte-ui/bleed"
  import { Box } from "@isbatak/svelte-ui/box"
</script>

<Box w="full" maxW="sm" px="8" py="4" borderWidth="1px" borderRadius="l2" color="fg.muted">
  <Box mb="3">Padded content</Box>
  <Bleed inline="8" bg="bg.emphasized" py="4" textAlign="center" color="fg">
    Bleed
  </Bleed>
</Box>
