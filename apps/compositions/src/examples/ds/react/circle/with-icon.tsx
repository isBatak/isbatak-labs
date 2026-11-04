import { Box } from "@isbatak/react-ui/box"
import { Circle } from "@isbatak/react-ui/circle"
import { Icon } from "@isbatak/react-ui/icon"
import { Square } from "@isbatak/react-ui/square"

export function CircleWithIconDemo() {
  return (
    <Box display="flex" gap="4" alignItems="center">
      <Circle size="10" bg="bg.inverted" color="fg.inverted">
        <Icon name="check" />
      </Circle>
      <Square size="10" borderWidth="1px" borderRadius="l2">
        <Icon name="plus" />
      </Square>
    </Box>
  )
}
