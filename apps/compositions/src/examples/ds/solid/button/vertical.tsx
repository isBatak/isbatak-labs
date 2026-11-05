import { Button } from "@isbatak/solid-ui/button"
import { Icon, StartIcon } from "@isbatak/solid-ui/icon"
import { HStack } from "@isbatak/solid-ui/stack"

export function ButtonVerticalDemo() {
  return (
    <HStack gap="1">
      <Button orientation="vertical" variant="ghost" size="sm">
        <StartIcon asChild={(iconProps) => <Icon {...iconProps()} name="home" />} />
        Home
      </Button>
      <Button orientation="vertical" variant="ghost" size="sm">
        <StartIcon asChild={(iconProps) => <Icon {...iconProps()} name="search" />} />
        Search
      </Button>
      <Button orientation="vertical" variant="ghost" size="sm">
        <StartIcon asChild={(iconProps) => <Icon {...iconProps()} name="settings" />} />
        Settings
      </Button>
    </HStack>
  )
}
