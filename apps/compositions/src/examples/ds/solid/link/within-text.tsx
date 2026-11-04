import { Link } from "@isbatak/solid-ui/link"
import { Text } from "@isbatak/solid-ui/text"

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
