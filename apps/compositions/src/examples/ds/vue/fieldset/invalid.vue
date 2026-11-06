<script setup lang="ts">
import { Field } from "@isbatak/vue-ui/field"
import { Fieldset } from "@isbatak/vue-ui/fieldset"
import { Input } from "@isbatak/vue-ui/input"
</script>

<template>
  <Fieldset.Root :invalid="true" maxW="md">
    <Fieldset.Legend>Shipping</Fieldset.Legend>
    <Fieldset.Content>
      <Field.Root :invalid="true">
        <Field.Label>Address</Field.Label>
        <Input />
      </Field.Root>
    </Fieldset.Content>
    <Fieldset.ErrorText>Fill in a shipping address.</Fieldset.ErrorText>
  </Fieldset.Root>
</template>
