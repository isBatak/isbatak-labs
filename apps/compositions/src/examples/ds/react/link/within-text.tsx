import { Link } from "@isbatak/react-ui/link"
import { Text } from "@isbatak/react-ui/text"

export function LinkWithinTextDemo() {
  return (
    <Text>
      Read the{" "}
      <Link variant="underline" href="#link">
        release notes
      </Link>{" "}
      before you upgrade.
    </Text>
  )
}
