import { Box } from "@isbatak/react-ui/box"

export function BoxWithHideFromDemo() {
  return (
    <Box bg="bg.emphasized" p="4" borderRadius="l2" hideFrom="md">
      Hidden from the md breakpoint up
    </Box>
  )
}
