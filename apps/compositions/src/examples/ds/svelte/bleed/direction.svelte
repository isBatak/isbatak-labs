<script lang="ts">
  import { Bleed } from "@isbatak/svelte-ui/bleed"
  import { Box } from "@isbatak/svelte-ui/box"
  import { Stack } from "@isbatak/svelte-ui/stack"
</script>

<Box w="full" maxW="sm" p="8" borderWidth="1px" borderRadius="l2">
  <Stack gap="4">
    <Bleed inlineStart="8" bg="bg.emphasized" p="2">
      inlineStart
    </Bleed>
    <Bleed inlineEnd="8" bg="bg.emphasized" p="2">
      inlineEnd
    </Bleed>
  </Stack>
</Box>
