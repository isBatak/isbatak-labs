<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Icon, StartIcon } from "@isbatak/vue-ui/icon"
import { Toggle } from "@isbatak/vue-ui/toggle"
</script>

<template>
  <Toggle.Root :asChild="true" :defaultPressed="true">
    <Button variant="outline">
      <StartIcon :asChild="true">
        <Toggle.Indicator>
          <Icon name="check" />
        </Toggle.Indicator>
      </StartIcon>
      Subscribed
    </Button>
  </Toggle.Root>
</template>
