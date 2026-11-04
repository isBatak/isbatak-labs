import { AbsoluteCenter } from "@isbatak/solid-ui/absolute-center"
import { Box } from "@isbatak/solid-ui/box"
import { Spinner } from "@isbatak/solid-ui/spinner"

export function AbsoluteCenterWithOverlayDemo() {
  return (
    <Box position="relative" h="32" w="full" maxW="sm" borderWidth="1px" borderRadius="l2" p="4" color="fg.muted">
      Loading the report…
      <AbsoluteCenter>
        <Spinner />
      </AbsoluteCenter>
    </Box>
  )
}
