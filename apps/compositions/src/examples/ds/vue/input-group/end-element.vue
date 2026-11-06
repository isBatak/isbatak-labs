<script setup lang="ts">
import { Icon } from "@isbatak/vue-ui/icon"
import { Input } from "@isbatak/vue-ui/input"
import { InputGroup } from "@isbatak/vue-ui/input-group"
</script>

<template>
  <InputGroup maxW="xs">
    <template #endElement><Icon name="mail" /></template>
    <Input placeholder="Email" />
  </InputGroup>
</template>
