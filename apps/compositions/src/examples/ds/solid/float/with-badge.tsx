import { Badge } from "@isbatak/solid-ui/badge"
import { Box } from "@isbatak/solid-ui/box"
import { Float } from "@isbatak/solid-ui/float"

export function FloatWithBadgeDemo() {
  return (
    <Box position="relative" display="inline-flex" w="16" h="16" bg="bg.emphasized" borderRadius="l2">
      <Float placement="bottom-end">
        <Badge size="sm" variant="solid">
          New
        </Badge>
      </Float>
    </Box>
  )
}
