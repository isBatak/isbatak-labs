<script setup lang="ts">
import { Field } from "@isbatak/vue-ui/field"
import { Input } from "@isbatak/vue-ui/input"
import { Stack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <Stack gap="4" w="full" maxW="sm">
    <Field.Root orientation="horizontal">
      <Field.Label>Name</Field.Label>
      <Input placeholder="Jane Doe" flex="1" />
    </Field.Root>
    <Field.Root orientation="horizontal">
      <Field.Label>Email</Field.Label>
      <Input placeholder="me@example.com" flex="1" />
    </Field.Root>
  </Stack>
</template>
