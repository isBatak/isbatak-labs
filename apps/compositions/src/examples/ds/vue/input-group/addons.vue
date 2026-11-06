<script setup lang="ts">
import { Input } from "@isbatak/vue-ui/input"
import { InputGroup } from "@isbatak/vue-ui/input-group"
</script>

<template>
  <InputGroup maxW="sm">
    <template #startAddon>https://</template>
    <Input placeholder="yoursite" />
    <template #endAddon>.com</template>
  </InputGroup>
</template>
