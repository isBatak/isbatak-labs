import { Box } from "@isbatak/react-ui/box"
import { Center } from "@isbatak/react-ui/center"
import { Icon } from "@isbatak/react-ui/icon"

export function CenterInlineDemo() {
  return (
    <Box asChild color="fg">
      <a href="#center">
        <Center inline gap="2">
          <Icon name="external-link" />
          Visit the docs
        </Center>
      </a>
    </Box>
  )
}
