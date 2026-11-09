<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Popover } from "@isbatak/vue-ui/popover"
</script>

<template>
  <Popover.Root>
    <Popover.Trigger :asChild="true">
      <Button variant="outline">
        Options
        <Popover.Indicator />
      </Button>
    </Popover.Trigger>
    <Teleport to="body">
      <Popover.Positioner>
        <Popover.Content>
          <Popover.Arrow>
            <Popover.ArrowTip />
          </Popover.Arrow>
          <Popover.Header>
            <Popover.Title>Options</Popover.Title>
            <Popover.Description>The chevron turns while the popover is open.</Popover.Description>
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
