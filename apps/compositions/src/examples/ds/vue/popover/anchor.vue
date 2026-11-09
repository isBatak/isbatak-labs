<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Input } from "@isbatak/vue-ui/input"
import { Popover } from "@isbatak/vue-ui/popover"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <Popover.Root>
    <HStack gap="2">
      <Popover.Anchor :asChild="true">
        <Input placeholder="Search" w="56" />
      </Popover.Anchor>
      <Popover.Trigger :asChild="true">
        <Button variant="outline">Filters</Button>
      </Popover.Trigger>
    </HStack>
    <Teleport to="body">
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
            <Popover.ActionTrigger :asChild="true">
              <Button size="sm">Got it</Button>
            </Popover.ActionTrigger>
          </Popover.Footer>
        </Popover.Content>
      </Popover.Positioner>
    </Teleport>
  </Popover.Root>
</template>
