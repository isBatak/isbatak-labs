<script lang="ts">
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { Textarea } from "@isbatak/svelte-ui/textarea"
</script>

<Stack gap="3" w="full" maxW="sm">
  <Textarea size="xs" placeholder="size (xs)" />
  <Textarea size="sm" placeholder="size (sm)" />
  <Textarea size="md" placeholder="size (md)" />
  <Textarea size="lg" placeholder="size (lg)" />
</Stack>
