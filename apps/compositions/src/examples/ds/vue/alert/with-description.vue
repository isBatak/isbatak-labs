<script setup lang="ts">
import { Alert } from "@isbatak/vue-ui/alert"
</script>

<template>
  <Alert.Root status="error">
    <Alert.Indicator />
    <Alert.Content>
      <Alert.Title>Invalid credentials</Alert.Title>
      <Alert.Description>Check your email and password and try again.</Alert.Description>
    </Alert.Content>
  </Alert.Root>
</template>
