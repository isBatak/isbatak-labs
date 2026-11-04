import { Box } from "@isbatak/solid-ui/box"

export function BoxWithPseudoPropsDemo() {
  return (
    <Box bg="bg.muted" w="full" p="4" borderRadius="l2" cursor="button" _hover={{ bg: "bg.emphasized" }}>
      Hover me
    </Box>
  )
}
