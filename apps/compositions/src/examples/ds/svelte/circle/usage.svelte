<script lang="ts">
  import { Box } from "@isbatak/svelte-ui/box"
  import { Circle } from "@isbatak/svelte-ui/circle"
  import { Square } from "@isbatak/svelte-ui/square"
</script>

<Box display="flex" gap="4" alignItems="center">
  <Circle size="12" bg="bg.emphasized" color="fg">
    A
  </Circle>
  <Square size="12" bg="bg.emphasized" color="fg" borderRadius="l2">
    B
  </Square>
</Box>
