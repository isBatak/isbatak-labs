import { Highlight } from "@isbatak/solid-ui/highlight"
import { Text } from "@isbatak/solid-ui/text"

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
