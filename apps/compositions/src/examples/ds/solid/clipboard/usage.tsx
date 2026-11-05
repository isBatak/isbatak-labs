import { Button } from "@isbatak/solid-ui/button"
import { Clipboard } from "@isbatak/solid-ui/clipboard"
import { Icon } from "@isbatak/solid-ui/icon"

export function ClipboardDemo() {
  return (
    <Clipboard.Root value="https://isbatak.dev">
      <Clipboard.Trigger
        asChild={(props) => (
          <Button {...props()} icon variant="surface" size="xs" aria-label="Copy link">
            <Clipboard.Indicator copied={<Icon name="check" />}>
              <Icon name="copy" />
            </Clipboard.Indicator>
          </Button>
        )}
      />
    </Clipboard.Root>
  )
}
