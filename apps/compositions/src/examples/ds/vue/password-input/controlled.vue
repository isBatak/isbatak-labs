<script setup lang="ts">
import { Icon } from "@isbatak/vue-ui/icon"
import { PasswordInput } from "@isbatak/vue-ui/password-input"
import { Stack } from "@isbatak/vue-ui/stack"
import { Text } from "@isbatak/vue-ui/text"
import { ref } from "vue"

const visible = ref(false)
</script>

<template>
  <Stack gap="3" w="full" maxW="xs">
    <PasswordInput.Root :visible="visible" @visibility-change="(details) => (visible = details.visible)">
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
    <Text textStyle="sm" color="fg.muted">Password is {{ visible ? "visible" : "hidden" }}</Text>
  </Stack>
</template>
