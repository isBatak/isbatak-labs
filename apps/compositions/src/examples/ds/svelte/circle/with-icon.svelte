<script lang="ts">
  import { Box } from "@isbatak/svelte-ui/box"
  import { Circle } from "@isbatak/svelte-ui/circle"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { Square } from "@isbatak/svelte-ui/square"
</script>

<Box display="flex" gap="4" alignItems="center">
  <Circle size="10" bg="bg.inverted" color="fg.inverted">
    <Icon name="check" />
  </Circle>
  <Square size="10" borderWidth="1px" borderRadius="l2">
    <Icon name="plus" />
  </Square>
</Box>
