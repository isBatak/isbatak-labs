<script setup lang="ts">
import { Icon } from "@isbatak/vue-ui/icon"
import { PasswordInput } from "@isbatak/vue-ui/password-input"
</script>

<template>
  <PasswordInput.Root
    :translations="{ visibilityTrigger: (visible) => (visible ? 'Passwort verbergen' : 'Passwort anzeigen') }"
    maxW="xs"
  >
    <PasswordInput.Label>Passwort</PasswordInput.Label>
    <PasswordInput.Control>
      <PasswordInput.Input placeholder="Passwort eingeben" />
      <PasswordInput.VisibilityTrigger>
        <PasswordInput.Indicator>
          <template #fallback><Icon name="view-off" /></template>
          <Icon name="view" />
        </PasswordInput.Indicator>
      </PasswordInput.VisibilityTrigger>
    </PasswordInput.Control>
  </PasswordInput.Root>
</template>
