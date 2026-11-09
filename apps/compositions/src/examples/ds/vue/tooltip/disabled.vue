<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Tooltip } from "@isbatak/vue-ui/tooltip"
</script>

<template>
  <Tooltip.Root :disabled="true">
    <Tooltip.Trigger :asChild="true">
      <Button variant="outline">Hover me</Button>
    </Tooltip.Trigger>
    <Teleport to="body">
      <Tooltip.Positioner>
        <Tooltip.Content>
          <Tooltip.Arrow>
            <Tooltip.ArrowTip />
          </Tooltip.Arrow>
          You won't see this
        </Tooltip.Content>
      </Tooltip.Positioner>
    </Teleport>
  </Tooltip.Root>
</template>
