<script lang="ts">
  import { Box } from "@isbatak/svelte-ui/box"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { Input } from "@isbatak/svelte-ui/input"
  import { InputGroup } from "@isbatak/svelte-ui/input-group"
</script>

<Box maxW="xs" w="full">
  <InputGroup>
    {#snippet endElement()}<Icon name="mail" />{/snippet}
    <Input placeholder="Email" />
  </InputGroup>
</Box>
