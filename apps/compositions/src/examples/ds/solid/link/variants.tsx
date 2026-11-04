import { Link } from "@isbatak/solid-ui/link"
import { Stack } from "@isbatak/solid-ui/stack"

export function LinkVariantsDemo() {
  return (
    <Stack>
      <Link variant="underline" href="#link">
        Underline
      </Link>
      <Link variant="plain" href="#link">
        Plain
      </Link>
    </Stack>
  )
}
