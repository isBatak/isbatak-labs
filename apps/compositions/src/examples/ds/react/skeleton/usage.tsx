import { Skeleton, SkeletonCircle } from "@isbatak/react-ui/skeleton"
import { HStack, Stack } from "@isbatak/react-ui/stack"

export function SkeletonDemo() {
  return (
    <HStack gap="5">
      <SkeletonCircle size="12" />
      <Stack flex="1">
        <Skeleton height="5" />
        <Skeleton height="5" width="[80%]" />
      </Stack>
    </HStack>
  )
}
