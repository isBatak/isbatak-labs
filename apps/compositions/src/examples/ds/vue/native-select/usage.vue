<script setup lang="ts">
import { NativeSelect } from "@isbatak/vue-ui/native-select"
</script>

<template>
  <NativeSelect.Root maxW="xs">
    <NativeSelect.Field aria-label="Framework">
      <option value="">Select framework</option>
      <option value="react">React</option>
      <option value="vue">Vue</option>
      <option value="solid">Solid</option>
      <option value="svelte">Svelte</option>
    </NativeSelect.Field>
    <NativeSelect.Indicator />
  </NativeSelect.Root>
</template>
