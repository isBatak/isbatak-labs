import { Button } from "@isbatak/react-ui/button"
import { Ripple } from "@isbatak/react-ui/ripple"

export function RippleDisabledButtonDemo() {
  return (
    <Ripple asChild>
      <Button variant="outline" disabled>
        Disabled button
      </Button>
    </Ripple>
  )
}
