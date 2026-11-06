<script setup lang="ts">
import { Field } from "@isbatak/vue-ui/field"
import { Textarea } from "@isbatak/vue-ui/textarea"
</script>

<template>
  <Field.Root maxW="sm">
    <Field.Label>Bio</Field.Label>
    <Textarea placeholder="Tell us about yourself" />
    <Field.HelperText>Max 500 characters.</Field.HelperText>
  </Field.Root>
</template>
