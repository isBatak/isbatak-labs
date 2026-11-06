<script setup lang="ts">
import { Icon } from "@isbatak/vue-ui/icon"
import { PasswordInput } from "@isbatak/vue-ui/password-input"
</script>

<template>
  <PasswordInput.Root autoComplete="new-password" maxW="xs">
    <PasswordInput.Label>New password</PasswordInput.Label>
    <PasswordInput.Control>
      <PasswordInput.Input placeholder="Choose a password" />
      <PasswordInput.VisibilityTrigger>
        <PasswordInput.Indicator>
          <template #fallback><Icon name="view-off" /></template>
          <Icon name="view" />
        </PasswordInput.Indicator>
      </PasswordInput.VisibilityTrigger>
    </PasswordInput.Control>
  </PasswordInput.Root>
</template>
