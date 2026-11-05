<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Clipboard } from "@isbatak/vue-ui/clipboard"
import { Icon } from "@isbatak/vue-ui/icon"
</script>

<template>
  <Clipboard.Root defaultValue="https://isbatak.dev" orientation="vertical">
    <Clipboard.Label>Share link</Clipboard.Label>
    <Clipboard.Control>
      <Clipboard.ValueText />
      <Clipboard.Trigger :asChild="true">
        <Button :icon="true" variant="ghost" size="xs" aria-label="Copy link">
          <Clipboard.Indicator>
            <Icon name="copy" />
            <template #copied><Icon name="check" /></template>
          </Clipboard.Indicator>
        </Button>
      </Clipboard.Trigger>
    </Clipboard.Control>
  </Clipboard.Root>
</template>
