import { Heading } from "@isbatak/react-ui/heading"
import { Highlight } from "@isbatak/react-ui/highlight"

export function HeadingWithHighlightDemo() {
  return (
    <Heading size="2xl" maxW="lg">
      <Highlight query="spotlight" text="Create accessible apps with a spotlight on speed" variant="subtle" />
    </Heading>
  )
}
