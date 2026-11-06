<script setup lang="ts">
import { Icon } from "@isbatak/vue-ui/icon"
import { PasswordInput } from "@isbatak/vue-ui/password-input"
</script>

<template>
  <PasswordInput.Root :ignorePasswordManagers="true" maxW="xs">
    <PasswordInput.Label>API key</PasswordInput.Label>
    <PasswordInput.Control>
      <PasswordInput.Input placeholder="Paste your API key" />
      <PasswordInput.VisibilityTrigger>
        <PasswordInput.Indicator>
          <template #fallback><Icon name="view-off" /></template>
          <Icon name="view" />
        </PasswordInput.Indicator>
      </PasswordInput.VisibilityTrigger>
    </PasswordInput.Control>
  </PasswordInput.Root>
</template>
