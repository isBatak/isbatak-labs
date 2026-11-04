<script lang="ts">
  import { Badge } from "@isbatak/svelte-ui/badge"
  import { Box } from "@isbatak/svelte-ui/box"
  import { Float } from "@isbatak/svelte-ui/float"
</script>

<Box position="relative" display="inline-flex" w="16" h="16" bg="bg.emphasized" borderRadius="l2">
  <Float placement="bottom-end">
    <Badge size="sm" variant="solid">
      New
    </Badge>
  </Float>
</Box>
