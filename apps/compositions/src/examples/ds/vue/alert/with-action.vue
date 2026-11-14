<script setup lang="ts">
import { Alert } from "@isbatak/vue-ui/alert"
import { Button } from "@isbatak/vue-ui/button"
</script>

<template>
  <Alert.Root status="warning" alignItems="center">
    <Alert.Indicator />
    <Alert.Content flex="1">
      <Alert.Title>Your session is about to expire</Alert.Title>
    </Alert.Content>
    <Button size="xs" variant="outline">Extend</Button>
  </Alert.Root>
</template>
