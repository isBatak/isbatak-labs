import { Button } from "@isbatak/react-ui/button"
import { Icon, StartIcon } from "@isbatak/react-ui/icon"
import { Toggle } from "@isbatak/react-ui/toggle"

export function ToggleWithIndicatorDemo() {
  return (
    <Toggle.Root asChild>
      <Button variant="outline">
        <StartIcon asChild>
          <Toggle.Indicator fallback={<Icon name="volume" />}>
            <Icon name="volume-off" />
          </Toggle.Indicator>
        </StartIcon>
        <Toggle.Indicator fallback="Mute">Unmute</Toggle.Indicator>
      </Button>
    </Toggle.Root>
  )
}
