import { Blockquote } from "@isbatak/solid-ui/blockquote"
import { Stack } from "@isbatak/solid-ui/stack"

export function BlockquoteVariantsDemo() {
  return (
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
  )
}
