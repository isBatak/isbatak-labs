import { Button } from "@isbatak/react-ui/button"
import { Clipboard } from "@isbatak/react-ui/clipboard"
import { Icon } from "@isbatak/react-ui/icon"

export function ClipboardWithLabelDemo() {
  return (
    <Clipboard.Root value="https://isbatak.dev" orientation="vertical">
      <Clipboard.Label>Share link</Clipboard.Label>
      <Clipboard.Control>
        <Clipboard.ValueText />
        <Clipboard.Trigger asChild>
          <Button icon variant="ghost" size="xs" aria-label="Copy link">
            <Clipboard.Indicator copied={<Icon name="check" />}>
              <Icon name="copy" />
            </Clipboard.Indicator>
          </Button>
        </Clipboard.Trigger>
      </Clipboard.Control>
    </Clipboard.Root>
  )
}
