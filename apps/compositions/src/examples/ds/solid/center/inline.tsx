import { Box } from "@isbatak/solid-ui/box"
import { Center } from "@isbatak/solid-ui/center"
import { Icon } from "@isbatak/solid-ui/icon"

export function CenterInlineDemo() {
  return (
    <Box
      color="fg"
      asChild={(props) => (
        <a {...props()} href="#center">
          <Center inline gap="2">
            <Icon name="external-link" />
            Visit the docs
          </Center>
        </a>
      )}
    />
  )
}
