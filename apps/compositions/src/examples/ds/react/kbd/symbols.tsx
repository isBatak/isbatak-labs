import { EndIcon, Icon, StartIcon } from "@isbatak/react-ui/icon"
import { Kbd } from "@isbatak/react-ui/kbd"
import { HStack } from "@isbatak/react-ui/stack"

export function KbdSymbolsDemo() {
  return (
    <HStack gap="2">
      <Kbd>
        <StartIcon asChild offset="0.18em">
          <Icon name="command" />
        </StartIcon>
        K
      </Kbd>
      <Kbd>
        <StartIcon asChild offset="0.15em">
          <Icon name="shift" />
        </StartIcon>
        <Icon name="command" />P
      </Kbd>
      <Kbd>
        <StartIcon asChild offset="0.18em">
          <Icon name="option" />
        </StartIcon>
        <EndIcon asChild offset="0.26em">
          <Icon name="arrow-up" />
        </EndIcon>
      </Kbd>
    </HStack>
  )
}
