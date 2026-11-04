import { Box } from "@isbatak/solid-ui/box"
import { Separator } from "@isbatak/solid-ui/separator"
import { Stack } from "@isbatak/solid-ui/stack"

export function SeparatorResponsiveOrientationDemo() {
  return (
    <Stack direction={{ base: "column", md: "row" }} gap="4" align="stretch" color="fg.muted">
      <Box>First</Box>
      <Separator orientation={{ base: "horizontal", md: "vertical" }} />
      <Box>Second</Box>
    </Stack>
  )
}
