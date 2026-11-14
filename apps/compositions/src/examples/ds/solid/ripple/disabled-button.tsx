import { Button } from "@isbatak/solid-ui/button"
import { Ripple } from "@isbatak/solid-ui/ripple"

export function RippleDisabledButtonDemo() {
  return (
    <Ripple
      asChild={(props) => (
        <Button {...props()} variant="outline" disabled>
          Disabled button
        </Button>
      )}
    />
  )
}
