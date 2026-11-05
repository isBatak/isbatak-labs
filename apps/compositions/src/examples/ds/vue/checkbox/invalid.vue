<script setup lang="ts">
import { Checkbox } from "@isbatak/vue-ui/checkbox"
</script>

<template>
  <Checkbox.Root :invalid="true">
    <Checkbox.HiddenInput />
    <Checkbox.Control />
    <Checkbox.Label>I agree to the terms</Checkbox.Label>
  </Checkbox.Root>
</template>
