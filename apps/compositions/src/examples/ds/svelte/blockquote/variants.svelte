<script lang="ts">
  import { Blockquote } from "@isbatak/svelte-ui/blockquote"
  import { Stack } from "@isbatak/svelte-ui/stack"
</script>

<Stack gap="6" maxW="md">
  <Blockquote.Root variant="subtle">
    <Blockquote.Content>Subtle: a soft rule on the start edge.</Blockquote.Content>
  </Blockquote.Root>
  <Blockquote.Root variant="solid">
    <Blockquote.Content>Solid: a strong rule on the start edge.</Blockquote.Content>
  </Blockquote.Root>
  <Blockquote.Root variant="plain">
    <Blockquote.Content>Plain: no rule.</Blockquote.Content>
  </Blockquote.Root>
</Stack>
