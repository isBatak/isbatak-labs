<script lang="ts">
  import { Input } from "@isbatak/svelte-ui/input"
  import { Stack } from "@isbatak/svelte-ui/stack"
</script>

<Stack gap="3" w="full" maxW="xs">
  <Input size="xs" placeholder="size (xs)" />
  <Input size="sm" placeholder="size (sm)" />
  <Input size="md" placeholder="size (md)" />
  <Input size="lg" placeholder="size (lg)" />
</Stack>
