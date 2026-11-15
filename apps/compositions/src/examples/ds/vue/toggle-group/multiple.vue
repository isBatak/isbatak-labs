<script setup lang="ts">
import { Icon } from "@isbatak/vue-ui/icon"
import { ToggleGroup } from "@isbatak/vue-ui/toggle-group"
</script>

<template>
  <ToggleGroup.Root :defaultValue="['bold']" multiple aria-label="Text formatting">
    <ToggleGroup.Item value="bold" aria-label="Bold">
      <Icon name="bold" />
    </ToggleGroup.Item>
    <ToggleGroup.Item value="italic" aria-label="Italic">
      <Icon name="italic" />
    </ToggleGroup.Item>
    <ToggleGroup.Item value="underline" aria-label="Underline">
      <Icon name="underline" />
    </ToggleGroup.Item>
  </ToggleGroup.Root>
</template>
