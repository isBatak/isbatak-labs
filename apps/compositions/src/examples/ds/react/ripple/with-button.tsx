import { Button } from "@isbatak/react-ui/button"
import { Ripple } from "@isbatak/react-ui/ripple"

export function RippleWithButtonDemo() {
  return (
    <Ripple asChild>
      <Button variant="outline">Press or use keyboard</Button>
    </Ripple>
  )
}
