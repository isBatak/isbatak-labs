import { Badge } from "@isbatak/react-ui/badge"
import { Loader } from "@isbatak/react-ui/loader"

export function LoaderWithBadgeDemo() {
  return (
    <Badge>
      <Loader text="Loading…">Click me</Loader>
    </Badge>
  )
}
