<script setup lang="ts">
import { Checkbox } from "@isbatak/vue-ui/checkbox"
</script>

<template>
  <Checkbox.Root defaultChecked="indeterminate">
    <Checkbox.HiddenInput />
    <Checkbox.Control />
    <Checkbox.Label>Select all</Checkbox.Label>
  </Checkbox.Root>
</template>
