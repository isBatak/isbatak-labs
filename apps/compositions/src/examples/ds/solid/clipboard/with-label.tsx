import { Button } from "@isbatak/solid-ui/button"
import { Clipboard } from "@isbatak/solid-ui/clipboard"
import { Icon } from "@isbatak/solid-ui/icon"

export function ClipboardWithLabelDemo() {
  return (
    <Clipboard.Root value="https://isbatak.dev" orientation="vertical">
      <Clipboard.Label>Share link</Clipboard.Label>
      <Clipboard.Control>
        <Clipboard.ValueText />
        <Clipboard.Trigger
          asChild={(props) => (
            <Button {...props()} icon variant="ghost" size="xs" aria-label="Copy link">
              <Clipboard.Indicator copied={<Icon name="check" />}>
                <Icon name="copy" />
              </Clipboard.Indicator>
            </Button>
          )}
        />
      </Clipboard.Control>
    </Clipboard.Root>
  )
}
