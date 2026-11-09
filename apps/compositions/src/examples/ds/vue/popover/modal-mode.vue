<script setup lang="ts">
import { Button, CloseButton } from "@isbatak/vue-ui/button"
import { Popover } from "@isbatak/vue-ui/popover"
</script>

<template>
  <Popover.Root :modalMode="true">
    <Popover.Trigger :asChild="true">
      <Button variant="outline">Open as a sheet</Button>
    </Popover.Trigger>
    <Teleport to="body">
      <Popover.Backdrop />
      <Popover.Positioner>
        <Popover.Content>
          <Popover.Header>
            <Popover.Title>Share this page</Popover.Title>
            <Popover.Description
              >In modal mode the popover leaves its trigger and sits at the bottom of the screen above a
              backdrop.</Popover.Description
            >
          </Popover.Header>
          <Popover.Footer>
            <Popover.ActionTrigger :asChild="true">
              <Button size="sm" variant="outline">Cancel</Button>
            </Popover.ActionTrigger>
            <Button size="sm">Copy link</Button>
          </Popover.Footer>
          <Popover.CloseTrigger :asChild="true">
            <CloseButton size="sm" />
          </Popover.CloseTrigger>
        </Popover.Content>
      </Popover.Positioner>
    </Teleport>
  </Popover.Root>
</template>
