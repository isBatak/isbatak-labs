import { Highlight } from "@isbatak/solid-ui/highlight"
import { Text } from "@isbatak/solid-ui/text"

export function HighlightMatchAllDemo() {
  return (
    <Text>
      <Highlight query="a" text="A banana and a papaya" variant="solid" matchAll ignoreCase />
    </Text>
  )
}
