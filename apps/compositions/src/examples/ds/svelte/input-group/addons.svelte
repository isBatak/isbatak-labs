<script lang="ts">
  import { Box } from "@isbatak/svelte-ui/box"
  import { Input } from "@isbatak/svelte-ui/input"
  import { InputGroup } from "@isbatak/svelte-ui/input-group"
</script>

<Box maxW="sm" w="full">
  <InputGroup>
    {#snippet startAddon()}https://{/snippet}
    {#snippet endAddon()}.com{/snippet}
    <Input placeholder="yoursite" />
  </InputGroup>
</Box>
