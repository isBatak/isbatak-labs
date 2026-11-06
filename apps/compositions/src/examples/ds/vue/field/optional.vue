<script setup lang="ts">
import { Field } from "@isbatak/vue-ui/field"
import { Input } from "@isbatak/vue-ui/input"
</script>

<template>
  <Field.Root maxW="xs">
    <Field.Label>
      Phone
      <Field.OptionalText />
    </Field.Label>
    <Input placeholder="+385 1 234 567" />
  </Field.Root>
</template>
