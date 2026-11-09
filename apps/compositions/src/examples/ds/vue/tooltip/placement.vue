<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { HStack } from "@isbatak/vue-ui/stack"
import { Tooltip } from "@isbatak/vue-ui/tooltip"
</script>

<template>
  <HStack gap="4">
    <Tooltip.Root :positioning="{ placement: 'top' }">
      <Tooltip.Trigger :asChild="true">
        <Button variant="outline">Top</Button>
      </Tooltip.Trigger>
      <Teleport to="body">
        <Tooltip.Positioner>
          <Tooltip.Content>
            <Tooltip.Arrow>
              <Tooltip.ArrowTip />
            </Tooltip.Arrow>
            On top
          </Tooltip.Content>
        </Tooltip.Positioner>
      </Teleport>
    </Tooltip.Root>
    <Tooltip.Root :positioning="{ placement: 'right' }">
      <Tooltip.Trigger :asChild="true">
        <Button variant="outline">Right</Button>
      </Tooltip.Trigger>
      <Teleport to="body">
        <Tooltip.Positioner>
          <Tooltip.Content>
            <Tooltip.Arrow>
              <Tooltip.ArrowTip />
            </Tooltip.Arrow>
            On the right
          </Tooltip.Content>
        </Tooltip.Positioner>
      </Teleport>
    </Tooltip.Root>
    <Tooltip.Root :positioning="{ placement: 'bottom' }">
      <Tooltip.Trigger :asChild="true">
        <Button variant="outline">Bottom</Button>
      </Tooltip.Trigger>
      <Teleport to="body">
        <Tooltip.Positioner>
          <Tooltip.Content>
            <Tooltip.Arrow>
              <Tooltip.ArrowTip />
            </Tooltip.Arrow>
            Below
          </Tooltip.Content>
        </Tooltip.Positioner>
      </Teleport>
    </Tooltip.Root>
    <Tooltip.Root :positioning="{ placement: 'left' }">
      <Tooltip.Trigger :asChild="true">
        <Button variant="outline">Left</Button>
      </Tooltip.Trigger>
      <Teleport to="body">
        <Tooltip.Positioner>
          <Tooltip.Content>
            <Tooltip.Arrow>
              <Tooltip.ArrowTip />
            </Tooltip.Arrow>
            On the left
          </Tooltip.Content>
        </Tooltip.Positioner>
      </Teleport>
    </Tooltip.Root>
  </HStack>
</template>
