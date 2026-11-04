<script lang="ts">
  import { Box } from "@isbatak/svelte-ui/box"
  import { Separator } from "@isbatak/svelte-ui/separator"
  import { Stack } from "@isbatak/svelte-ui/stack"
</script>

<Stack direction={{ base: "column", md: "row" }} gap="4" align="stretch" color="fg.muted">
  <Box>First</Box>
  <Separator orientation={{ base: "horizontal", md: "vertical" }} />
  <Box>Second</Box>
</Stack>
