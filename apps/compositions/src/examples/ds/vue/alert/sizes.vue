<script setup lang="ts">
import { Alert } from "@isbatak/vue-ui/alert"
import { VStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <VStack gap="4">
    <Alert.Root size="sm">
      <Alert.Indicator />
      <Alert.Content>
        <Alert.Title>Small alert</Alert.Title>
      </Alert.Content>
    </Alert.Root>
    <Alert.Root size="md">
      <Alert.Indicator />
      <Alert.Content>
        <Alert.Title>Medium alert</Alert.Title>
      </Alert.Content>
    </Alert.Root>
    <Alert.Root size="lg">
      <Alert.Indicator />
      <Alert.Content>
        <Alert.Title>Large alert</Alert.Title>
      </Alert.Content>
    </Alert.Root>
  </VStack>
</template>
