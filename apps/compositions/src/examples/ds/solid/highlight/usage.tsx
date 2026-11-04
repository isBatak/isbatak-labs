import { Highlight } from "@isbatak/solid-ui/highlight"
import { Text } from "@isbatak/solid-ui/text"

export function HighlightDemo() {
  return (
    <Text>
      <Highlight query="spotlight" text="With the Highlight component, you can spotlight words." variant="subtle" />
    </Text>
  )
}
