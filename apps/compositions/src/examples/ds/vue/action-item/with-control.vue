<script setup lang="ts">
import { ActionItem } from "@isbatak/vue-ui/action-item"
import { Icon } from "@isbatak/vue-ui/icon"
import { Switch } from "@isbatak/vue-ui/switch"
</script>

<template>
  <ActionItem.Root maxW="sm">
    <ActionItem.StartElement>
      <Icon name="moon" />
    </ActionItem.StartElement>
    <ActionItem.Label>Dark mode</ActionItem.Label>
    <ActionItem.ControlElement>
      <Switch.Root>
        <Switch.HiddenInput aria-label="Dark mode" />
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
      </Switch.Root>
    </ActionItem.ControlElement>
  </ActionItem.Root>
</template>
