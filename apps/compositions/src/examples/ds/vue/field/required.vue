<script setup lang="ts">
import { Field } from "@isbatak/vue-ui/field"
import { Input } from "@isbatak/vue-ui/input"
</script>

<template>
  <Field.Root :required="true" maxW="xs">
    <Field.Label>
      Email
      <Field.RequiredIndicator />
    </Field.Label>
    <Input placeholder="me@example.com" />
  </Field.Root>
</template>
