<script setup lang="ts">
import { Icon } from "@isbatak/vue-ui/icon"
import { Input } from "@isbatak/vue-ui/input"
import { InputGroup } from "@isbatak/vue-ui/input-group"
</script>

<template>
  <InputGroup maxW="xs">
    <template #startElement><Icon name="search" /></template>
    <Input placeholder="Search contacts" />
  </InputGroup>
</template>
