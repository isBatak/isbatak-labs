<script lang="ts">
  import { Box } from "@isbatak/svelte-ui/box"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Group } from "@isbatak/svelte-ui/group"
</script>

<Box w="full" maxW="sm">
  <Group grow>
    <Button variant="outline">First</Button>
    <Button variant="outline">Second</Button>
    <Button variant="outline">Third</Button>
  </Group>
</Box>
