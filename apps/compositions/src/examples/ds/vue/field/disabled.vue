<script setup lang="ts">
import { Field } from "@isbatak/vue-ui/field"
import { Input } from "@isbatak/vue-ui/input"
</script>

<template>
  <Field.Root :disabled="true" maxW="xs">
    <Field.Label>Email</Field.Label>
    <Input placeholder="me@example.com" />
  </Field.Root>
</template>
