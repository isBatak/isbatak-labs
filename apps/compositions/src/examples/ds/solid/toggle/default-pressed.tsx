import { Button } from "@isbatak/solid-ui/button"
import { Icon, StartIcon } from "@isbatak/solid-ui/icon"
import { Toggle } from "@isbatak/solid-ui/toggle"

export function ToggleDefaultPressedDemo() {
  return (
    <Toggle.Root
      defaultPressed
      asChild={(props) => (
        <Button {...props()} variant="outline">
          <StartIcon
            asChild={(iconProps) => (
              <Toggle.Indicator {...iconProps()}>
                <Icon name="check" />
              </Toggle.Indicator>
            )}
          />
          Subscribed
        </Button>
      )}
    />
  )
}
