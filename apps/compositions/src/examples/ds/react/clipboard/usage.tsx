import { Button } from "@isbatak/react-ui/button"
import { Clipboard } from "@isbatak/react-ui/clipboard"
import { Icon } from "@isbatak/react-ui/icon"

export function ClipboardDemo() {
  return (
    <Clipboard.Root value="https://isbatak.dev">
      <Clipboard.Trigger asChild>
        <Button icon variant="surface" size="xs" aria-label="Copy link">
          <Clipboard.Indicator copied={<Icon name="check" />}>
            <Icon name="copy" />
          </Clipboard.Indicator>
        </Button>
      </Clipboard.Trigger>
    </Clipboard.Root>
  )
}
