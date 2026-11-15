import { Button } from "@isbatak/solid-ui/button"
import { Ripple } from "@isbatak/solid-ui/ripple"

export function RippleWithButtonDemo() {
  return (
    <Ripple
      asChild={(props) => (
        <Button {...props()} variant="outline">
          Press or use keyboard
        </Button>
      )}
    />
  )
}
