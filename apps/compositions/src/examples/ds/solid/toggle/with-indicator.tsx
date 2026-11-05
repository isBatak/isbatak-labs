import { Button } from "@isbatak/solid-ui/button"
import { Icon, StartIcon } from "@isbatak/solid-ui/icon"
import { Toggle } from "@isbatak/solid-ui/toggle"

export function ToggleWithIndicatorDemo() {
  return (
    <Toggle.Root
      asChild={(props) => (
        <Button {...props()} variant="outline">
          <StartIcon
            asChild={(iconProps) => (
              <Toggle.Indicator {...iconProps()} fallback={<Icon name="volume" />}>
                <Icon name="volume-off" />
              </Toggle.Indicator>
            )}
          />
          <Toggle.Indicator fallback="Mute">Unmute</Toggle.Indicator>
        </Button>
      )}
    />
  )
}
