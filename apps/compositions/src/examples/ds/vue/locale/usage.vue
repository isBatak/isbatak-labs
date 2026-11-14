<script setup lang="ts">
import { Format } from "@isbatak/vue-ui/format"
import { LocaleProvider } from "@isbatak/vue-ui/locale"
import { VStack } from "@isbatak/vue-ui/stack"
import { Text } from "@isbatak/vue-ui/text"
</script>

<template>
  <VStack gap="2" alignItems="flex-start">
    <LocaleProvider locale="en-US">
      <Text>en-US: <Format.Number :value="1234567.891" /></Text>
    </LocaleProvider>
    <LocaleProvider locale="de-DE">
      <Text>de-DE: <Format.Number :value="1234567.891" /></Text>
    </LocaleProvider>
    <LocaleProvider locale="hr-HR">
      <Text>hr-HR: <Format.Number :value="1234567.891" /></Text>
    </LocaleProvider>
  </VStack>
</template>
