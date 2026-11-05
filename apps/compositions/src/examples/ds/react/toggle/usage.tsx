import { Button } from "@isbatak/react-ui/button"
import { Icon } from "@isbatak/react-ui/icon"
import { Toggle } from "@isbatak/react-ui/toggle"

export function ToggleDemo() {
  return (
    <Toggle.Root asChild aria-label="Bold">
      <Button icon variant="outline">
        <Icon name="bold" />
      </Button>
    </Toggle.Root>
  )
}
