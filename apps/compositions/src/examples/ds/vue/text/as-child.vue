<script setup lang="ts">
import { Text } from "@isbatak/vue-ui/text"
</script>

<template>
  <Text :asChild="true" color="fg.muted">
    <label for="text-as-child">Rendered as a label</label>
  </Text>
</template>
