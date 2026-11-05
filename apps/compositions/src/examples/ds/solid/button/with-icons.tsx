import { Button } from "@isbatak/solid-ui/button"
import { EndIcon, Icon, StartIcon } from "@isbatak/solid-ui/icon"
import { HStack } from "@isbatak/solid-ui/stack"

export function ButtonWithIconsDemo() {
  return (
    <HStack gap="4">
      <Button>
        <StartIcon asChild={(iconProps) => <Icon {...iconProps()} name="mail" />} />
        Email
      </Button>
      <Button variant="outline">
        Call us
        <EndIcon asChild={(iconProps) => <Icon {...iconProps()} name="arrow-right" />} />
      </Button>
    </HStack>
  )
}
