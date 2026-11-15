<script setup lang="ts">
import { Icon } from "@isbatak/vue-ui/icon"
import { ToggleGroup } from "@isbatak/vue-ui/toggle-group"
import { Tooltip } from "@isbatak/vue-ui/tooltip"
</script>

<template>
  <ToggleGroup.Root :defaultValue="['bold']" multiple aria-label="Text formatting">
    <Tooltip.Root :openDelay="300">
      <Tooltip.Trigger :asChild="true">
        <ToggleGroup.Item value="bold" aria-label="Bold">
          <Icon name="bold" />
        </ToggleGroup.Item>
      </Tooltip.Trigger>
      <Teleport to="body">
        <Tooltip.Positioner>
          <Tooltip.Content>Bold</Tooltip.Content>
        </Tooltip.Positioner>
      </Teleport>
    </Tooltip.Root>
    <Tooltip.Root :openDelay="300">
      <Tooltip.Trigger :asChild="true">
        <ToggleGroup.Item value="italic" aria-label="Italic">
          <Icon name="italic" />
        </ToggleGroup.Item>
      </Tooltip.Trigger>
      <Teleport to="body">
        <Tooltip.Positioner>
          <Tooltip.Content>Italic</Tooltip.Content>
        </Tooltip.Positioner>
      </Teleport>
    </Tooltip.Root>
    <Tooltip.Root :openDelay="300">
      <Tooltip.Trigger :asChild="true">
        <ToggleGroup.Item value="underline" aria-label="Underline">
          <Icon name="underline" />
        </ToggleGroup.Item>
      </Tooltip.Trigger>
      <Teleport to="body">
        <Tooltip.Positioner>
          <Tooltip.Content>Underline</Tooltip.Content>
        </Tooltip.Positioner>
      </Teleport>
    </Tooltip.Root>
  </ToggleGroup.Root>
</template>
