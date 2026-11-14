import { Skeleton } from "@isbatak/solid-ui/skeleton"
import { Stack } from "@isbatak/solid-ui/stack"

export function SkeletonVariantsDemo() {
  return (
    <Stack gap="5">
      <Skeleton height="5" variant="pulse" />
      <Skeleton height="5" variant="shine" />
    </Stack>
  )
}
