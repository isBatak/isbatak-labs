import { Badge } from "@isbatak/react-ui/badge"
import { Skeleton } from "@isbatak/react-ui/skeleton"
import { HStack } from "@isbatak/react-ui/stack"

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
