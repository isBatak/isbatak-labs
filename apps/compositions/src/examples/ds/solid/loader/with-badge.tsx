import { Badge } from "@isbatak/solid-ui/badge"
import { Loader } from "@isbatak/solid-ui/loader"

export function LoaderWithBadgeDemo() {
  return (
    <Badge>
      <Loader text="Loading…">Click me</Loader>
    </Badge>
  )
}
