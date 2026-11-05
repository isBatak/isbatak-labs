<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Icon, StartIcon } from "@isbatak/vue-ui/icon"
import { Toggle } from "@isbatak/vue-ui/toggle"
</script>

<template>
  <Toggle.Root :asChild="true">
    <Button variant="outline">
      <StartIcon :asChild="true">
        <Toggle.Indicator>
          <Icon name="volume-off" />
          <template #fallback><Icon name="volume" /></template>
        </Toggle.Indicator>
      </StartIcon>
      <Toggle.Indicator>
        Unmute
        <template #fallback>Mute</template>
      </Toggle.Indicator>
    </Button>
  </Toggle.Root>
</template>
