import { Box } from "@isbatak/react-ui/box"
import { Circle } from "@isbatak/react-ui/circle"
import { Square } from "@isbatak/react-ui/square"

export function CircleDemo() {
  return (
    <Box display="flex" gap="4" alignItems="center">
      <Circle size="12" bg="bg.emphasized" color="fg">
        A
      </Circle>
      <Square size="12" bg="bg.emphasized" color="fg" borderRadius="l2">
        B
      </Square>
    </Box>
  )
}
