import { Box } from "@isbatak/react-ui/box"
import { Separator } from "@isbatak/react-ui/separator"
import { Stack } from "@isbatak/react-ui/stack"

export function SeparatorResponsiveOrientationDemo() {
  return (
    <Stack direction={{ base: "column", md: "row" }} gap="4" align="stretch" color="fg.muted">
      <Box>First</Box>
      <Separator orientation={{ base: "horizontal", md: "vertical" }} />
      <Box>Second</Box>
    </Stack>
  )
}
