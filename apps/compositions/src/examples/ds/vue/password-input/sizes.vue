<script setup lang="ts">
import { Icon } from "@isbatak/vue-ui/icon"
import { PasswordInput } from "@isbatak/vue-ui/password-input"
import { Stack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <Stack gap="5" w="full" maxW="xs">
    <PasswordInput.Root size="xs">
      <PasswordInput.Label>size xs</PasswordInput.Label>
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
    <PasswordInput.Root size="sm">
      <PasswordInput.Label>size sm</PasswordInput.Label>
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
    <PasswordInput.Root size="md">
      <PasswordInput.Label>size md</PasswordInput.Label>
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
    <PasswordInput.Root size="lg">
      <PasswordInput.Label>size lg</PasswordInput.Label>
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
