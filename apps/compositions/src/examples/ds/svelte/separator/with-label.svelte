<script lang="ts">
  import { Box } from "@isbatak/svelte-ui/box"
  import { Separator } from "@isbatak/svelte-ui/separator"
  import { HStack, Stack } from "@isbatak/svelte-ui/stack"
</script>

<Stack w="full" maxW="sm" color="fg.muted">
  <HStack>
    <Box flexShrink="0">Label (start)</Box>
    <Separator flex="1" />
  </HStack>
  <HStack>
    <Separator flex="1" />
    <Box flexShrink="0">Label (end)</Box>
  </HStack>
  <HStack>
    <Separator flex="1" />
    <Box flexShrink="0">Label (center)</Box>
    <Separator flex="1" />
  </HStack>
</Stack>
