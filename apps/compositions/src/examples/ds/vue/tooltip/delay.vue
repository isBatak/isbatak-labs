<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { HStack } from "@isbatak/vue-ui/stack"
import { Tooltip } from "@isbatak/vue-ui/tooltip"
</script>

<template>
  <HStack gap="4">
    <Tooltip.Root :openDelay="0" :closeDelay="0">
      <Tooltip.Trigger :asChild="true">
        <Button variant="outline">No delay</Button>
      </Tooltip.Trigger>
      <Teleport to="body">
        <Tooltip.Positioner>
          <Tooltip.Content>
            <Tooltip.Arrow>
              <Tooltip.ArrowTip />
            </Tooltip.Arrow>
            Opens right away
          </Tooltip.Content>
        </Tooltip.Positioner>
      </Teleport>
    </Tooltip.Root>
    <Tooltip.Root :openDelay="1000" :closeDelay="500">
      <Tooltip.Trigger :asChild="true">
        <Button variant="outline">Slow</Button>
      </Tooltip.Trigger>
      <Teleport to="body">
        <Tooltip.Positioner>
          <Tooltip.Content>
            <Tooltip.Arrow>
              <Tooltip.ArrowTip />
            </Tooltip.Arrow>
            Opens after a second
          </Tooltip.Content>
        </Tooltip.Positioner>
      </Teleport>
    </Tooltip.Root>
  </HStack>
</template>
