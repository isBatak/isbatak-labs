import { Highlight } from "@isbatak/react-ui/highlight"
import { Text } from "@isbatak/react-ui/text"

export function HighlightDemo() {
  return (
    <Text>
      <Highlight query="spotlight" text="With the Highlight component, you can spotlight words." variant="subtle" />
    </Text>
  )
}
