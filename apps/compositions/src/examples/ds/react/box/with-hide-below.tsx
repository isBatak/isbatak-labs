import { Box } from "@isbatak/react-ui/box"

export function BoxWithHideBelowDemo() {
  return (
    <Box bg="bg.emphasized" p="4" borderRadius="l2" hideBelow="md">
      Hidden below the md breakpoint
    </Box>
  )
}
