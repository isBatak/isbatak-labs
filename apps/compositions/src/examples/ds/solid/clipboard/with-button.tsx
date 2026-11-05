import { Button } from "@isbatak/solid-ui/button"
import { Clipboard } from "@isbatak/solid-ui/clipboard"
import { Icon, StartIcon } from "@isbatak/solid-ui/icon"

export function ClipboardWithButtonDemo() {
  return (
    <Clipboard.Root value="https://isbatak.dev">
      <Clipboard.Trigger
        asChild={(props) => (
          <Button {...props()} variant="surface" size="sm">
            <StartIcon
              asChild={(iconProps) => (
                <Clipboard.Indicator {...iconProps()} copied={<Icon name="check" />}>
                  <Icon name="copy" />
                </Clipboard.Indicator>
              )}
            />
            <Clipboard.Indicator copied="Copied">Copy link</Clipboard.Indicator>
          </Button>
        )}
      />
    </Clipboard.Root>
  )
}
