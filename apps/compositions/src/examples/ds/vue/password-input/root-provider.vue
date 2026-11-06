<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Icon } from "@isbatak/vue-ui/icon"
import { PasswordInput, usePasswordInput } from "@isbatak/vue-ui/password-input"
import { Stack } from "@isbatak/vue-ui/stack"

const passwordInput = usePasswordInput()
</script>

<template>
  <Stack gap="3" w="full" maxW="xs" alignItems="flex-start">
    <Button variant="outline" size="sm" @click="passwordInput.toggleVisible()"
      >{{ passwordInput.visible ? "Hide" : "Show" }} password</Button
    >
    <PasswordInput.RootProvider :value="passwordInput">
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
    </PasswordInput.RootProvider>
  </Stack>
</template>
