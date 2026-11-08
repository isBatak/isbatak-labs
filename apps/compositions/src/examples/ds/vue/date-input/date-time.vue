<script setup lang="ts">
import { DateInput } from "@isbatak/vue-ui/date-input"
</script>

<template>
  <DateInput.Root granularity="minute" maxW="xs">
    <DateInput.Label>Meeting</DateInput.Label>
    <DateInput.Control>
      <DateInput.SegmentGroup>
        <DateInput.Segments />
      </DateInput.SegmentGroup>
    </DateInput.Control>
    <DateInput.HiddenInput />
  </DateInput.Root>
</template>
