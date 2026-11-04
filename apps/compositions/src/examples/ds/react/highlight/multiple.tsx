import { Highlight } from "@isbatak/react-ui/highlight"
import { Text } from "@isbatak/react-ui/text"

export function HighlightMultipleDemo() {
  return (
    <Text>
      <Highlight
        query={["spotlight", "emphasize"]}
        text="Spotlight or emphasize several words at once."
        variant="subtle"
        ignoreCase
      />
    </Text>
  )
}
