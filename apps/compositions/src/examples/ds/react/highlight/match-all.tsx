import { Highlight } from "@isbatak/react-ui/highlight"
import { Text } from "@isbatak/react-ui/text"

export function HighlightMatchAllDemo() {
  return (
    <Text>
      <Highlight query="a" text="A banana and a papaya" variant="solid" matchAll ignoreCase />
    </Text>
  )
}
