import { Box } from "@isbatak/solid-ui/box"
import { Center } from "@isbatak/solid-ui/center"
import { Icon } from "@isbatak/solid-ui/icon"

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
