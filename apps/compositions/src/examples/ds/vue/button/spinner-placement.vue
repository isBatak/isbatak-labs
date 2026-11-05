<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="4">
    <Button :loading="true" loadingText="Loading" spinnerPlacement="start"> Submit </Button>
    <Button :loading="true" loadingText="Loading" spinnerPlacement="end"> Continue </Button>
  </HStack>
</template>
