import { Button } from "@isbatak/react-ui/button"
import { EndIcon, Icon, StartIcon } from "@isbatak/react-ui/icon"
import { HStack } from "@isbatak/react-ui/stack"

export function ButtonWithIconsDemo() {
  return (
    <HStack gap="4">
      <Button>
        <StartIcon asChild>
          <Icon name="mail" />
        </StartIcon>
        Email
      </Button>
      <Button variant="outline">
        Call us
        <EndIcon asChild>
          <Icon name="arrow-right" />
        </EndIcon>
      </Button>
    </HStack>
  )
}
