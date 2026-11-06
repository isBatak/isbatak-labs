<script setup lang="ts">
import { Field } from "@isbatak/vue-ui/field"
import { Input } from "@isbatak/vue-ui/input"
</script>

<template>
  <Field.Root :invalid="true" maxW="xs">
    <Field.Label>Email</Field.Label>
    <Input placeholder="me@example.com" />
    <Field.ErrorText>This field is required.</Field.ErrorText>
  </Field.Root>
</template>
