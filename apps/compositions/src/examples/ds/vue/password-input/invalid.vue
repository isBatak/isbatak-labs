<script setup lang="ts">
import { Icon } from "@isbatak/vue-ui/icon"
import { PasswordInput } from "@isbatak/vue-ui/password-input"
import { field } from "@isbatak/panda-ds/recipes"

const fieldClasses = field()
</script>

<template>
  <PasswordInput.Root :invalid="true" maxW="xs">
    <PasswordInput.Label>Password</PasswordInput.Label>
    <PasswordInput.Control>
      <PasswordInput.Input value="short" />
      <PasswordInput.VisibilityTrigger>
        <PasswordInput.Indicator>
          <template #fallback><Icon name="view-off" /></template>
          <Icon name="view" />
        </PasswordInput.Indicator>
      </PasswordInput.VisibilityTrigger>
    </PasswordInput.Control>
    <span :class="fieldClasses.errorText">Use at least 8 characters.</span>
  </PasswordInput.Root>
</template>
