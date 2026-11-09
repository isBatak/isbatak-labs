<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { HStack } from "@isbatak/vue-ui/stack"
import { Tooltip } from "@isbatak/vue-ui/tooltip"
</script>

<template>
  <HStack gap="4">
    <Tooltip.Root size="sm">
      <Tooltip.Trigger :asChild="true">
        <Button variant="outline">sm</Button>
      </Tooltip.Trigger>
      <Teleport to="body">
        <Tooltip.Positioner>
          <Tooltip.Content>
            <Tooltip.Arrow>
              <Tooltip.ArrowTip />
            </Tooltip.Arrow>
            Saved to your library
          </Tooltip.Content>
        </Tooltip.Positioner>
      </Teleport>
    </Tooltip.Root>
    <Tooltip.Root size="md">
      <Tooltip.Trigger :asChild="true">
        <Button variant="outline">md</Button>
      </Tooltip.Trigger>
      <Teleport to="body">
        <Tooltip.Positioner>
          <Tooltip.Content>
            <Tooltip.Arrow>
              <Tooltip.ArrowTip />
            </Tooltip.Arrow>
            Saved to your library
          </Tooltip.Content>
        </Tooltip.Positioner>
      </Teleport>
    </Tooltip.Root>
    <Tooltip.Root size="lg">
      <Tooltip.Trigger :asChild="true">
        <Button variant="outline">lg</Button>
      </Tooltip.Trigger>
      <Teleport to="body">
        <Tooltip.Positioner>
          <Tooltip.Content>
            <Tooltip.Arrow>
              <Tooltip.ArrowTip />
            </Tooltip.Arrow>
            Saved to your library
          </Tooltip.Content>
        </Tooltip.Positioner>
      </Teleport>
    </Tooltip.Root>
  </HStack>
</template>
