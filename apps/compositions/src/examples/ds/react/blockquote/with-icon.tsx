import { Blockquote } from "@isbatak/react-ui/blockquote"
import { Icon } from "@isbatak/react-ui/icon"

export function BlockquoteWithIconDemo() {
  return (
    <Blockquote.Root maxW="md" variant="plain">
      <Blockquote.Icon>
        <Icon name="quote-filled" />
      </Blockquote.Icon>
      <Blockquote.Content>Simplicity is prerequisite for reliability.</Blockquote.Content>
      <Blockquote.Caption>Edsger W. Dijkstra</Blockquote.Caption>
    </Blockquote.Root>
  )
}
