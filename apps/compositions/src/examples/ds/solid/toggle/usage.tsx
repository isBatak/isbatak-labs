import { Button } from "@isbatak/solid-ui/button"
import { Icon } from "@isbatak/solid-ui/icon"
import { Toggle } from "@isbatak/solid-ui/toggle"

export function ToggleDemo() {
  return (
    <Toggle.Root
      aria-label="Bold"
      asChild={(props) => (
        <Button {...props()} icon variant="outline">
          <Icon name="bold" />
        </Button>
      )}
    />
  )
}
