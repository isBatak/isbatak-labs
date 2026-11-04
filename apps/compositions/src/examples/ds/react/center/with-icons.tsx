import { Box } from "@isbatak/react-ui/box"
import { Center } from "@isbatak/react-ui/center"
import { Icon } from "@isbatak/react-ui/icon"

export function CenterWithIconsDemo() {
  return (
    <Box display="flex" gap="4">
      <Center w="10" h="10" bg="bg.emphasized" borderRadius="l2">
        <Icon name="phone" />
      </Center>
      <Center w="10" h="10" bg="bg.emphasized" borderRadius="l2">
        <Icon name="mail" />
      </Center>
    </Box>
  )
}
