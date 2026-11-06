<script setup lang="ts">
import { Icon } from "@isbatak/vue-ui/icon"
import { PasswordInput } from "@isbatak/vue-ui/password-input"
</script>

<template>
  <PasswordInput.Root :defaultVisible="true" maxW="xs">
    <PasswordInput.Label>Password</PasswordInput.Label>
    <PasswordInput.Control>
      <PasswordInput.Input value="boring-but-safe" />
      <PasswordInput.VisibilityTrigger>
        <PasswordInput.Indicator>
          <template #fallback><Icon name="view-off" /></template>
          <Icon name="view" />
        </PasswordInput.Indicator>
      </PasswordInput.VisibilityTrigger>
    </PasswordInput.Control>
  </PasswordInput.Root>
</template>
