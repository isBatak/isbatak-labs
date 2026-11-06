<script setup lang="ts">
import { Icon } from "@isbatak/vue-ui/icon"
import { PasswordInput } from "@isbatak/vue-ui/password-input"
import { Stack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <Stack gap="5" w="full" maxW="xs">
    <PasswordInput.Root variant="outline">
      <PasswordInput.Label>variant outline</PasswordInput.Label>
      <PasswordInput.Control>
        <PasswordInput.Input placeholder="Enter your password" />
        <PasswordInput.VisibilityTrigger>
          <PasswordInput.Indicator>
            <template #fallback><Icon name="view-off" /></template>
            <Icon name="view" />
          </PasswordInput.Indicator>
        </PasswordInput.VisibilityTrigger>
      </PasswordInput.Control>
    </PasswordInput.Root>
    <PasswordInput.Root variant="subtle">
      <PasswordInput.Label>variant subtle</PasswordInput.Label>
      <PasswordInput.Control>
        <PasswordInput.Input placeholder="Enter your password" />
        <PasswordInput.VisibilityTrigger>
          <PasswordInput.Indicator>
            <template #fallback><Icon name="view-off" /></template>
            <Icon name="view" />
          </PasswordInput.Indicator>
        </PasswordInput.VisibilityTrigger>
      </PasswordInput.Control>
    </PasswordInput.Root>
    <PasswordInput.Root variant="flushed">
      <PasswordInput.Label>variant flushed</PasswordInput.Label>
      <PasswordInput.Control>
        <PasswordInput.Input placeholder="Enter your password" />
        <PasswordInput.VisibilityTrigger>
          <PasswordInput.Indicator>
            <template #fallback><Icon name="view-off" /></template>
            <Icon name="view" />
          </PasswordInput.Indicator>
        </PasswordInput.VisibilityTrigger>
      </PasswordInput.Control>
    </PasswordInput.Root>
  </Stack>
</template>
