<script setup lang="ts">
import { Icon } from "@isbatak/vue-ui/icon"
import { Stack } from "@isbatak/vue-ui/stack"
import { ToggleGroup } from "@isbatak/vue-ui/toggle-group"
</script>

<template>
  <Stack gap="4" align="flex-start">
    <ToggleGroup.Root size="xs" :defaultValue="['bold']" multiple aria-label="Text formatting (xs)">
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
    <ToggleGroup.Root size="sm" :defaultValue="['bold']" multiple aria-label="Text formatting (sm)">
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
    <ToggleGroup.Root size="md" :defaultValue="['bold']" multiple aria-label="Text formatting (md)">
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
    <ToggleGroup.Root size="lg" :defaultValue="['bold']" multiple aria-label="Text formatting (lg)">
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
  </Stack>
</template>
