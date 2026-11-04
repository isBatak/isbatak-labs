import { Blockquote } from "@isbatak/react-ui/blockquote"

export function BlockquoteWithCaptionDemo() {
  return (
    <Blockquote.Root maxW="md">
      <Blockquote.Content>Simplicity is prerequisite for reliability.</Blockquote.Content>
      <Blockquote.Caption>Edsger W. Dijkstra</Blockquote.Caption>
    </Blockquote.Root>
  )
}
