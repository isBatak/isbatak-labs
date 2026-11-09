<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Popover } from "@isbatak/vue-ui/popover"
</script>

<template>
  <Popover.Root>
    <Popover.Trigger :asChild="true">
      <Button variant="outline">Open popover</Button>
    </Popover.Trigger>
    <Teleport to="body">
      <Popover.Positioner>
        <Popover.Content>
          <Popover.Arrow>
            <Popover.ArrowTip />
          </Popover.Arrow>
          <Popover.Header>
            <Popover.Title>Share</Popover.Title>
            <Popover.Description>Open another popover from inside this one.</Popover.Description>
          </Popover.Header>
          <Popover.Body>
            <Popover.Root :positioning="{ placement: 'right' }">
              <Popover.Trigger :asChild="true">
                <Button size="sm" variant="outline">More options</Button>
              </Popover.Trigger>
              <Teleport to="body">
                <Popover.Positioner>
                  <Popover.Content>
                    <Popover.Arrow>
                      <Popover.ArrowTip />
                    </Popover.Arrow>
                    <Popover.Header>
                      <Popover.Title>More options</Popover.Title>
                      <Popover.Description>Clicking in here keeps the first popover open.</Popover.Description>
                    </Popover.Header>
                  </Popover.Content>
                </Popover.Positioner>
              </Teleport>
            </Popover.Root>
          </Popover.Body>
        </Popover.Content>
      </Popover.Positioner>
    </Teleport>
  </Popover.Root>
</template>
