import { Button } from "@isbatak/react-ui/button"
import { Icon, StartIcon } from "@isbatak/react-ui/icon"
import { Toggle } from "@isbatak/react-ui/toggle"

export function ToggleDefaultPressedDemo() {
  return (
    <Toggle.Root asChild defaultPressed>
      <Button variant="outline">
        <StartIcon asChild>
          <Toggle.Indicator>
            <Icon name="check" />
          </Toggle.Indicator>
        </StartIcon>
        Subscribed
      </Button>
    </Toggle.Root>
  )
}
