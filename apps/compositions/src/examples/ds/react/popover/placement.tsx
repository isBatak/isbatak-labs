import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Popover } from "@isbatak/react-ui/popover"
import { HStack } from "styled-system/jsx"

export function PopoverPlacementDemo() {
  return (
    <HStack gap="4">
      <Popover.Root positioning={{ placement: "top" }}>
        <Popover.Trigger asChild>
          <Button variant="outline">Top</Button>
        </Popover.Trigger>
        <Portal>
          <Popover.Positioner>
            <Popover.Content>
              <Popover.Arrow>
                <Popover.ArrowTip />
              </Popover.Arrow>
              <Popover.Header>
                <Popover.Title>Release notes</Popover.Title>
                <Popover.Description>See what changed in this version.</Popover.Description>
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
      <Popover.Root positioning={{ placement: "right" }}>
        <Popover.Trigger asChild>
          <Button variant="outline">Right</Button>
        </Popover.Trigger>
        <Portal>
          <Popover.Positioner>
            <Popover.Content>
              <Popover.Arrow>
                <Popover.ArrowTip />
              </Popover.Arrow>
              <Popover.Header>
                <Popover.Title>Release notes</Popover.Title>
                <Popover.Description>See what changed in this version.</Popover.Description>
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
      <Popover.Root positioning={{ placement: "bottom" }}>
        <Popover.Trigger asChild>
          <Button variant="outline">Bottom</Button>
        </Popover.Trigger>
        <Portal>
          <Popover.Positioner>
            <Popover.Content>
              <Popover.Arrow>
                <Popover.ArrowTip />
              </Popover.Arrow>
              <Popover.Header>
                <Popover.Title>Release notes</Popover.Title>
                <Popover.Description>See what changed in this version.</Popover.Description>
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
      <Popover.Root positioning={{ placement: "left" }}>
        <Popover.Trigger asChild>
          <Button variant="outline">Left</Button>
        </Popover.Trigger>
        <Portal>
          <Popover.Positioner>
            <Popover.Content>
              <Popover.Arrow>
                <Popover.ArrowTip />
              </Popover.Arrow>
              <Popover.Header>
                <Popover.Title>Release notes</Popover.Title>
                <Popover.Description>See what changed in this version.</Popover.Description>
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
    </HStack>
  )
}
