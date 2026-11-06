<script lang="ts">
  import { Input } from "@isbatak/svelte-ui/input"
  import { Stack } from "@isbatak/svelte-ui/stack"
</script>

<Stack gap="3" w="full" maxW="xs">
  <Input variant="outline" placeholder="Outline" />
  <Input variant="subtle" placeholder="Subtle" />
  <Input variant="plain" placeholder="Plain" />
  <Input variant="flushed" placeholder="Flushed" />
</Stack>
