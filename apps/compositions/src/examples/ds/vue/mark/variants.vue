<script setup lang="ts">
import { Mark } from "@isbatak/vue-ui/mark"
import { Stack } from "@isbatak/vue-ui/stack"
import { Text } from "@isbatak/vue-ui/text"
</script>

<template>
  <Stack gap="4">
    <Text> The <Mark variant="subtle">design system</Mark> is a collection of UI elements. </Text>
    <Text> The <Mark variant="solid">design system</Mark> is a collection of UI elements. </Text>
    <Text> The <Mark variant="text">design system</Mark> is a collection of UI elements. </Text>
    <Text> The <Mark variant="plain">design system</Mark> is a collection of UI elements. </Text>
  </Stack>
</template>
