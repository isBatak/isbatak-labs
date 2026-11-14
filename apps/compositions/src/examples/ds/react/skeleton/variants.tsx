import { Skeleton } from "@isbatak/react-ui/skeleton"
import { Stack } from "@isbatak/react-ui/stack"

export function SkeletonVariantsDemo() {
  return (
    <Stack gap="5">
      <Skeleton height="5" variant="pulse" />
      <Skeleton height="5" variant="shine" />
    </Stack>
  )
}
