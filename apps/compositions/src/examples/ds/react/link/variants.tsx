import { Link } from "@isbatak/react-ui/link"
import { Stack } from "@isbatak/react-ui/stack"

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
