<script setup lang="ts">
import { PinInput } from "@isbatak/vue-ui/pin-input"
</script>

<template>
  <PinInput.Root :count="4" :mask="true">
    <PinInput.HiddenInput />
    <PinInput.Label>PIN</PinInput.Label>
    <PinInput.Control>
      <PinInput.Input :index="0" />
      <PinInput.Input :index="1" />
      <PinInput.Input :index="2" />
      <PinInput.Input :index="3" />
    </PinInput.Control>
  </PinInput.Root>
</template>
