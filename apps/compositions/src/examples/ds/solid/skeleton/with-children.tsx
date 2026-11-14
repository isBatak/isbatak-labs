import { Badge } from "@isbatak/solid-ui/badge"
import { Skeleton } from "@isbatak/solid-ui/skeleton"
import { HStack } from "@isbatak/solid-ui/stack"

export function SkeletonWithChildrenDemo() {
  return (
    <HStack gap="4">
      <Skeleton loading>
        <Badge>Select</Badge>
      </Skeleton>
      <Skeleton loading={false}>
        <Badge>Select</Badge>
      </Skeleton>
    </HStack>
  )
}
