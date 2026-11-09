<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Popover } from "@isbatak/vue-ui/popover"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="4">
    <Popover.Root size="xs">
      <Popover.Trigger :asChild="true">
        <Button variant="outline">xs</Button>
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
    <Popover.Root size="sm">
      <Popover.Trigger :asChild="true">
        <Button variant="outline">sm</Button>
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
    <Popover.Root size="md">
      <Popover.Trigger :asChild="true">
        <Button variant="outline">md</Button>
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
    <Popover.Root size="lg">
      <Popover.Trigger :asChild="true">
        <Button variant="outline">lg</Button>
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
