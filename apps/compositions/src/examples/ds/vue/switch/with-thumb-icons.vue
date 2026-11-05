<script setup lang="ts">
import { Icon } from "@isbatak/vue-ui/icon"
import { Switch } from "@isbatak/vue-ui/switch"
</script>

<template>
  <Switch.Root size="lg">
    <Switch.HiddenInput />
    <Switch.Control>
      <Switch.Thumb>
        <Switch.ThumbIndicator>
          <Icon name="moon" />
          <template #fallback><Icon name="sun" color="fg.muted" /></template>
        </Switch.ThumbIndicator>
      </Switch.Thumb>
    </Switch.Control>
    <Switch.Label>Dark mode</Switch.Label>
  </Switch.Root>
</template>
