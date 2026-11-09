import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Input } from "@isbatak/react-ui/input"
import { Popover } from "@isbatak/react-ui/popover"
import { HStack } from "styled-system/jsx"

export function PopoverAnchorDemo() {
  return (
    <Popover.Root>
      <HStack gap="2">
        <Popover.Anchor asChild>
          <Input placeholder="Search" w="56" />
        </Popover.Anchor>
        <Popover.Trigger asChild>
          <Button variant="outline">Filters</Button>
        </Popover.Trigger>
      </HStack>
      <Portal>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Arrow>
              <Popover.ArrowTip />
            </Popover.Arrow>
            <Popover.Header>
              <Popover.Title>Filters</Popover.Title>
              <Popover.Description>The popover lines up with the search field, not the button.</Popover.Description>
            </Popover.Header>
            <Popover.Footer>
              <Popover.ActionTrigger asChild>
                <Button size="sm">Got it</Button>
              </Popover.ActionTrigger>
            </Popover.Footer>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  )
}
