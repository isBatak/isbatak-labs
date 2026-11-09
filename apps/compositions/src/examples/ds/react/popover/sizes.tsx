import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Popover } from "@isbatak/react-ui/popover"
import { HStack } from "styled-system/jsx"

export function PopoverSizesDemo() {
  return (
    <HStack gap="4">
      <Popover.Root size="xs">
        <Popover.Trigger asChild>
          <Button variant="outline">xs</Button>
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
      <Popover.Root size="sm">
        <Popover.Trigger asChild>
          <Button variant="outline">sm</Button>
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
      <Popover.Root size="md">
        <Popover.Trigger asChild>
          <Button variant="outline">md</Button>
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
      <Popover.Root size="lg">
        <Popover.Trigger asChild>
          <Button variant="outline">lg</Button>
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
