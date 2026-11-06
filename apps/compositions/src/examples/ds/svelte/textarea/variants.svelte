<script lang="ts">
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { Textarea } from "@isbatak/svelte-ui/textarea"
</script>

<Stack gap="3" w="full" maxW="sm">
  <Textarea variant="outline" placeholder="Outline" />
  <Textarea variant="subtle" placeholder="Subtle" />
  <Textarea variant="plain" placeholder="Plain" />
  <Textarea variant="flushed" placeholder="Flushed" />
</Stack>
