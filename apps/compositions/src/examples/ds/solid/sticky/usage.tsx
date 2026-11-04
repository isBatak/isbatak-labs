import { Box } from "@isbatak/solid-ui/box"
import { Sticky } from "@isbatak/solid-ui/sticky"

export function StickyDemo() {
  return (
    <Box h="48" w="full" maxW="sm" overflowY="auto" borderWidth="1px" borderRadius="l2">
      <Sticky bg="bg.emphasized" px="4" py="2" fontWeight="medium">
        Sticky header
      </Sticky>
      <Box p="4" h="96" color="fg.muted">
        Scroll this box. The header stays at the top.
      </Box>
    </Box>
  )
}
