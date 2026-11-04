import { Blockquote } from "@isbatak/react-ui/blockquote"
import { Stack } from "@isbatak/react-ui/stack"

export function BlockquoteJustifyDemo() {
  return (
    <Stack gap="6" w="full" maxW="md">
      <Blockquote.Root justify="start">
        <Blockquote.Content>Start</Blockquote.Content>
      </Blockquote.Root>
      <Blockquote.Root justify="center">
        <Blockquote.Content>Center</Blockquote.Content>
      </Blockquote.Root>
      <Blockquote.Root justify="end">
        <Blockquote.Content>End</Blockquote.Content>
      </Blockquote.Root>
    </Stack>
  )
}
