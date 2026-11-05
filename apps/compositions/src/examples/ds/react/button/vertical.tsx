import { Button } from "@isbatak/react-ui/button"
import { Icon, StartIcon } from "@isbatak/react-ui/icon"
import { HStack } from "@isbatak/react-ui/stack"

export function ButtonVerticalDemo() {
  return (
    <HStack gap="1">
      <Button orientation="vertical" variant="ghost" size="sm">
        <StartIcon asChild>
          <Icon name="home" />
        </StartIcon>
        Home
      </Button>
      <Button orientation="vertical" variant="ghost" size="sm">
        <StartIcon asChild>
          <Icon name="search" />
        </StartIcon>
        Search
      </Button>
      <Button orientation="vertical" variant="ghost" size="sm">
        <StartIcon asChild>
          <Icon name="settings" />
        </StartIcon>
        Settings
      </Button>
    </HStack>
  )
}
