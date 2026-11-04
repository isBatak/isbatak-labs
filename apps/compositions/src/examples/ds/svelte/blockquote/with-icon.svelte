<script lang="ts">
  import { Blockquote } from "@isbatak/svelte-ui/blockquote"
  import { Icon } from "@isbatak/svelte-ui/icon"
</script>

<Blockquote.Root maxW="md" variant="plain">
  <Blockquote.Icon>
    <Icon name="quote-filled" />
  </Blockquote.Icon>
  <Blockquote.Content>Simplicity is prerequisite for reliability.</Blockquote.Content>
  <Blockquote.Caption>Edsger W. Dijkstra</Blockquote.Caption>
</Blockquote.Root>
