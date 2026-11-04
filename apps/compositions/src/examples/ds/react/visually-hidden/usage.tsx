import { Button } from "@isbatak/react-ui/button"
import { Icon } from "@isbatak/react-ui/icon"
import { VisuallyHidden } from "@isbatak/react-ui/visually-hidden"

export function VisuallyHiddenDemo() {
  return (
    <Button variant="outline">
      <Icon name="bell" />
      <VisuallyHidden>3 new notifications</VisuallyHidden>
    </Button>
  )
}
