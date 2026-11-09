<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Popover } from "@isbatak/vue-ui/popover"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="4">
    <Popover.Root :positioning="{ placement: 'top' }">
      <Popover.Trigger :asChild="true">
        <Button variant="outline">Top</Button>
      </Popover.Trigger>
      <Teleport to="body">
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
              <Popover.ActionTrigger :asChild="true">
                <Button size="sm">Got it</Button>
              </Popover.ActionTrigger>
            </Popover.Footer>
          </Popover.Content>
        </Popover.Positioner>
      </Teleport>
    </Popover.Root>
    <Popover.Root :positioning="{ placement: 'right' }">
      <Popover.Trigger :asChild="true">
        <Button variant="outline">Right</Button>
      </Popover.Trigger>
      <Teleport to="body">
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
              <Popover.ActionTrigger :asChild="true">
                <Button size="sm">Got it</Button>
              </Popover.ActionTrigger>
            </Popover.Footer>
          </Popover.Content>
        </Popover.Positioner>
      </Teleport>
    </Popover.Root>
    <Popover.Root :positioning="{ placement: 'bottom' }">
      <Popover.Trigger :asChild="true">
        <Button variant="outline">Bottom</Button>
      </Popover.Trigger>
      <Teleport to="body">
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
              <Popover.ActionTrigger :asChild="true">
                <Button size="sm">Got it</Button>
              </Popover.ActionTrigger>
            </Popover.Footer>
          </Popover.Content>
        </Popover.Positioner>
      </Teleport>
    </Popover.Root>
    <Popover.Root :positioning="{ placement: 'left' }">
      <Popover.Trigger :asChild="true">
        <Button variant="outline">Left</Button>
      </Popover.Trigger>
      <Teleport to="body">
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
              <Popover.ActionTrigger :asChild="true">
                <Button size="sm">Got it</Button>
              </Popover.ActionTrigger>
            </Popover.Footer>
          </Popover.Content>
        </Popover.Positioner>
      </Teleport>
    </Popover.Root>
  </HStack>
</template>
