import { Button } from "@isbatak/react-ui/button"
import { Clipboard } from "@isbatak/react-ui/clipboard"
import { Icon, StartIcon } from "@isbatak/react-ui/icon"

export function ClipboardWithButtonDemo() {
  return (
    <Clipboard.Root value="https://isbatak.dev">
      <Clipboard.Trigger asChild>
        <Button variant="surface" size="sm">
          <StartIcon asChild>
            <Clipboard.Indicator copied={<Icon name="check" />}>
              <Icon name="copy" />
            </Clipboard.Indicator>
          </StartIcon>
          <Clipboard.Indicator copied="Copied">Copy link</Clipboard.Indicator>
        </Button>
      </Clipboard.Trigger>
    </Clipboard.Root>
  )
}
