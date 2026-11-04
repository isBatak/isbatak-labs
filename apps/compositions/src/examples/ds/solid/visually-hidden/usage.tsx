import { Button } from "@isbatak/solid-ui/button"
import { Icon } from "@isbatak/solid-ui/icon"
import { VisuallyHidden } from "@isbatak/solid-ui/visually-hidden"

export function VisuallyHiddenDemo() {
  return (
    <Button variant="outline">
      <Icon name="bell" />
      <VisuallyHidden>3 new notifications</VisuallyHidden>
    </Button>
  )
}
