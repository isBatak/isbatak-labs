<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Clipboard } from "@isbatak/vue-ui/clipboard"
import { Icon } from "@isbatak/vue-ui/icon"
</script>

<template>
  <Clipboard.Root defaultValue="https://isbatak.dev">
    <Clipboard.Trigger :asChild="true">
      <Button :icon="true" variant="surface" size="xs" aria-label="Copy link">
        <Clipboard.Indicator>
          <Icon name="copy" />
          <template #copied><Icon name="check" /></template>
        </Clipboard.Indicator>
      </Button>
    </Clipboard.Trigger>
  </Clipboard.Root>
</template>
